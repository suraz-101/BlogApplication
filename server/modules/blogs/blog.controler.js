const BlogModel = require("./blog.model");
const { generateSlug } = require("../../utils/slug");
const { default: slugify } = require("slugify");
const { ObjectId } = require("mongodb");

//cooming querry that can be used in different functions which reduces the code redundancy and easy while updating
const commonQuerry = [
  {
    $lookup: {
      from: "users",
      localField: "author",
      foreignField: "_id",
      as: "BlogAuthor",
    },
  },
  {
    $unwind: {
      path: "$BlogAuthor",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $addFields: {
      author_name: "$BlogAuthor.name",
    },
  },
  {
    $addFields: {
      authorProfile: "$BlogAuthor.profilePic",
    },
  },
];

//commong pagination query that can be used in multiple functions (almost all the functions)
const facetQuerry = (page, limit) => {
  const array = [
    {
      $facet: {
        metadata: [
          {
            $count: "total",
          },
        ],
        data: [
          {
            $skip: (+page - 1) * +limit,
          },
          {
            $limit: +limit,
          },
        ],
      },
    },
    {
      $addFields: {
        total: {
          $arrayElemAt: ["$metadata.total", 0],
        },
      },
    },
  ];
  return array;
};

const create = (payload) => {
  payload.slug = generateSlug(payload.title);
  payload.words = payload.content.split(" ").length;
  return BlogModel.create(payload);
};

const getPublishedBlogs = async (search, sort = 1, page = 1, limit = 20) => {
  console.log(sort);
  const query = [];

  query.push({
    $match: {
      status: "published",
    },
  });

  if (search?.title) {
    query.push({
      $match: {
        title: new RegExp(`${search?.title}`, "gi"),
      },
    });
  }

  // using common querry that can used to merger users, comments and blog collection using lookup and unqind
  query.push.apply(query, commonQuerry);

  if (search?.author) {
    query.push({
      $match: {
        author_name: new RegExp(`${search?.author}`, "gi"),
      },
    });
  }

  // query to show the neccessary field
  query.push(
    {
      $project: {
        _id: 1,
        title: 1,
        content: 1,
        author: 1,
        author_name: 1,
        slug: 1,
        status: 1,
        createdAt: 1,
        blogImage: 1,
        authorProfile: 1,
        publishedDate: 1,
      },
    },
    {
      $sort: {
        publishedDate: Number(sort),
      },
    }
  );

  //using commong pagination query that can be used in getAll product as well
  query.push.apply(query, facetQuerry(page, limit));

  const result = await BlogModel.aggregate(query);

  return {
    data: result[0].data,
    total: result[0].total || 0,
    page: +page,
    limit: +limit,
  };
};

const getAll = async (search, page = 1, limit = 20) => {
  const querry = [];
  // filter the data according to last createdAt
  querry.push({
    $sort: {
      createdAt: -1,
    },
  });
  // query to merger users and comments and blogs collection
  //commong code that can be repeated where we need to merger users and comment collections
  querry.push.apply(querry, commonQuerry); // => to merge two different array use syntax ==>  oldArray.push.apply(oldArray,newArray);
  if (search?.authorId) {
    querry.push({
      $match: {
        author: search?.authorId,
      },
    });
  }

  if (search?.title) {
    querry.push({
      $match: {
        title: new RegExp(`${search.title}`, "gi"),
      },
    });
  }
  if (search?.author) {
    querry.push({
      $match: {
        author_name: new RegExp(`${search?.author}`, "gi"),
      },
    });
  }

  // query to include different fields of the colletions
  querry.push({
    $project: {
      _id: 1,
      title: 1,
      content: 1,
      author: 1,
      author_name: 1,
      slug: 1,
      status: 1,
      comments: "$BlogComments.comment",
      numberOfComments: 1,
      blogImage: 1,
      createdAt: 1,
      publishedDate: 1,
      words: 1,
    },
  });

  //query to search based on title and author name

  // using commong wuery for pagination which can be used in get published blogs  as well
  querry.push.apply(querry, facetQuerry(page, limit));

  const result = await BlogModel.aggregate(querry);
  return {
    data: result[0].data,
    total: result[0].total || 0,
    page: +page,
    limit: +limit,
  };
};

const getById = (id) => {
  console.log(id);
  // const query = [];
  // query.push();
  return BlogModel.aggregate([
    {
      $lookup: {
        from: "comments",
        localField: "_id",
        foreignField: "postedTo",
        as: "blogsComment",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "author",
      },
    },
    {
      $unwind: {
        path: "$author",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $addFields: {
        numberOfComments: {
          $size: "$blogsComment",
        },
      },
    },
    {
      $project: {
        _id: 1,
        title: 1,
        content: 1,
        slug: 1,
        comment: 0,
        comment: "$blogsComment.comment",
        numberOfComments: 1,
        author: 1,
        author_name: "$author.name",
        createdAt: 1,
        blogImage: 1,
        authorProfile: "$author.profilePic",
        publishedDate: 1,
        status: 1,
      },
    },
    {
      $match: {
        _id: new ObjectId(`${id}`),
      },
    },
  ]);
};

const getBySlug = (slug) => {
  console.log(slug);
  // const query = [];
  // query.push();
  return BlogModel.aggregate([
    {
      $lookup: {
        from: "comments",
        localField: "_id",
        foreignField: "postedTo",
        as: "blogsComment",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "author",
      },
    },
    {
      $unwind: {
        path: "$author",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $addFields: {
        numberOfComments: {
          $size: "$blogsComment",
        },
      },
    },
    {
      $project: {
        _id: 0,
        title: 1,
        content: 1,
        slug: 1,
        comment: 0,
        comment: "$blogsComment.comment",
        numberOfComments: 1,
        author: 1,
        author_name: "$author.name",
        createdAt: 1,
        blogImage: 1,
        authorProfile: "$author.profilePic",
        publishedDate: 1,
        status: 1,
      },
    },
    {
      $match: {
        slug: slug,
      },
    },
  ]);
};

const updateById = async (_id, payload) => {
  delete payload.slug;
  if (payload.title) payload.slug = generateSlug(payload.title);
  if (payload.content) payload.words = payload.content.split(" ").length;
  if (!_id) throw new Error("Id is required");
  const blog = await BlogModel.findOne({ _id });
  if (!blog) throw new Error("Blog didn't found!!");

  await BlogModel.updateOne({ _id: blog.id }, payload);
  return "Blog updated successfully";
};

const deleteById = (_id) => {
  return BlogModel.deleteOne({ _id });
};

const getAuthorBlog = async (search, page = 1, limit = 3) => {
  const query = [];

  query.push(
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "result",
      },
    },
    {
      $unwind: {
        path: "$result",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        _id: 0,
        title: 1,
        tags: 1,
        content: 1,
        slug: 1,
        author: 0,
        author: "$result.name",
      },
    }
  );

  if (search?.author) {
    query.push({
      $match: {
        author: new RegExp(search.author, "gi"),
      },
    });
  }

  if (search?.title) {
    query.push({
      $match: {
        title: new RegExp(search.title, "gi"),
      },
    });
  }

  //using commong pagination query that can be used in getAll product as well
  query.push.apply(query, facetQuerry(page, limit));
  const result = await BlogModel.aggregate(query);
  return {
    data: result[0].data,
    total: result[0].metadata[0].total,
    page: +page,
    limit: +limit,
  };
};

const updateTheStatusOnly = async (_id) => {
  const blog = await BlogModel.findOne({ _id });
  if (!blog) throw new Error("Blog not Found");
  const payload = { status: blog?.status === "draft" ? "published" : "draft" };
  return BlogModel.updateOne({ _id }, payload);
};

module.exports = {
  getPublishedBlogs,
  create,
  getAll,
  getById,
  updateById,
  deleteById,
  getAuthorBlog,
  updateTheStatusOnly,
  getBySlug,
};

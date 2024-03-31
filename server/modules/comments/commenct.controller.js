const { commentModel } = require("./comment.model");
const getAll = [
  {
    $lookup: {
      from: "users",
      localField: "postedBy",
      foreignField: "_id",
      as: "user",
    },
  },
  {
    $lookup: {
      from: "blogs",
      localField: "postedTo",
      foreignField: "_id",
      as: "blog",
    },
  },
  {
    $unwind: {
      path: "$user",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $unwind: {
      path: "$blog",
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $project: {
      _id: 0,
      comment: 1,
      postedBy: "$user.name",
      postedTo: 0,
      postedTo: "$blog.slug",
    },
  },
];

const createComment = async (payload) => {
  return await commentModel.create(payload);
};

const viewAllComments = async () => {
  return await commentModel.aggregate(getAll);
};

const blogComments = async (payload) => {
  if (!payload) throw new Error("Please, specify the blog ");
  getAll.push({
    $match: {
      postedTo: `${payload}`,
    },
  });

  return await commentModel.aggregate(getAll);
};

module.exports = { createComment, viewAllComments, blogComments };

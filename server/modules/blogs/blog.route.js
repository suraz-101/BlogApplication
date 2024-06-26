const router = require("express").Router();
const blogController = require("./blog.controler");
const { validate } = require("./blog.validator");
const { checkRole } = require("../../utils/sessionManager");
const multer = require("multer");

const blogImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/blog");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploadBlogImage = multer({ storage: blogImageStorage });

router.get("/", checkRole(["admin", "user"]), async (req, res, next) => {
  try {
    const { title, author, page, limit } = req.query;
    const search = { title, author, authorId: "" };
    if (req?.currentUser && req.role.includes("user")) {
      search.authorId = req.currentUser;
    }
    const result = await blogController.getAll(search, page, limit);
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

router.get(
  "/getPublishedBlogs",
  // checkRole(["user", "admin"]),
  async (req, res, next) => {
    try {
      const { title, author, page, limit, sort } = req.query;
      const search = { author, title };
      const result = await blogController.getPublishedBlogs(
        search,
        sort,
        page,
        limit
      );
      res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  }
);
router.get(
  "/authorBlog",
  checkRole(["admin", "user"]),
  async (req, res, next) => {
    try {
      const { author, title, page, limit } = req.query;
      const search = { author, title };
      const result = await blogController.getAuthorBlog(search, page, limit);
      res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  }
);

router.get("/singleBlog/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await blogController.getById(id);
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
});

router.get("/getBySlug/:slug", async (req, res, next) => {
  try {
    const { slug } = req.params;

    const result = await blogController.getBySlug(slug);
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  uploadBlogImage.single("blogImage"),
  checkRole(["user", "admin"]),
  validate,
  async (req, res, next) => {
    try {
      console.log("here qwe are");
      // uploadBlogImage.single("blogImage");
      if (req?.file) {
        req.body.blogImage = req.file.path.replace("public", "");
      }
      console.log("current user:", req.currentUser);
      if (req?.currentUser) {
        req.body.author = req.currentUser;
      }
      console.log(req.body);

      const result = await blogController.create(req.body);
      res.json({ data: result });
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/updateBlog/:id",
  uploadBlogImage.single("blogImage"),
  //  checkRole(["admin"]),
  async (req, res, next) => {
    try {
      if (req.file) {
        req.body.blogImage = req.file.path.replace("public", "");
      }
      console.log(req.params);
      console.log(req.body);
      const { id } = req.params;
      const data = req.body;
      // console.log("rest", rest);
      const result = await blogController.updateById(id, data);
      res.json({ message: result });
    } catch (err) {
      next(err);
    }
  }
);

router.patch("/status/:id", checkRole(["user"]), async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);

    const result = await blogController.updateTheStatusOnly(id);
    res.json({ message: result });
  } catch (err) {
    next(err);
  }
});

router.delete(
  "/deleteBlog/:id",
  checkRole(["admin"]),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log(id);
      const result = await blogController.deleteById(id);
      res.json({ message: result });
    } catch (error) {
      next();
    }
  }
);

module.exports = router;

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

router.get("/", checkRole(["user"]), async (req, res, next) => {
  try {
    const { title, author, page, limit } = req.query;
    const search = { title, author };
    const result = await blogController.getAll(search, page, limit);
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

router.get(
  "/getPublishedBlogs",
  checkRole(["user", "admin"]),
  async (req, res, next) => {
    try {
      const { status, page, limit } = req.query;
      const search = { status };
      const result = await blogController.getPublishedBlogs(
        search,
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

router.get("/slug/:slug", async (req, res, next) => {
  try {
    const { slug } = req.params;
    console.log(slug);
    const result = await blogController.getById(slug);
    res.json({ data: result });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  uploadBlogImage.single("blogImage"),
  checkRole(["user"]),
  validate,
  async (req, res, next) => {
    try {
      // uploadBlogImage.single("blogImage");
      req.body.blogImage = req.file.path.replace("public", "");
      const result = await blogController.create(req.body);
      res.json({ data: result });
    } catch (err) {
      next(err);
    }
  }
);

router.put("/updateBlog", checkRole(["admin"]), async (req, res, next) => {
  try {
    const { id, ...rest } = req.body;
    console.log(rest);
    const result = await blogController.updateById(id, rest);
    res.json({ message: result });
  } catch (err) {
    next(err);
  }
});

router.patch("/status/:id", checkRole(["user"]), async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await blogController.updateTheStatusOnly(id);
    res.json({ message: result });
  } catch (err) {
    next(err);
  }
});

router.delete("/deleteBlog", checkRole(["user"]), async (req, res, next) => {
  try {
    const { id } = req.body;
    const result = await blogController.deleteById(id);
    res.json({ message: result });
  } catch (error) {
    next();
  }
});

module.exports = router;

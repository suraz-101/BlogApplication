const commentsRouter = require("express").Router();
const {
  createComment,
  viewAllComments,
  blogComments,
} = require("./commenct.controller");
const { validation } = require("./commenct.validation");
const { checkRole } = require("../../utils/sessionManager");

commentsRouter.post(
  "/",
  checkRole(["admin", "user"]),
  validation,
  async (req, res, next) => {
    try {
      const result = await createComment(req.body);
      res.status(200).json({ message: result });
    } catch (error) {
      next(error);
    }
  }
);

commentsRouter.get("/", async (req, res, next) => {
  try {
    const result = await viewAllComments();

    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

commentsRouter.get("/:slug", async (req, res, next) => {
  try {
    const { slug } = req.params;
    const result = await blogComments(slug);

    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

module.exports = commentsRouter;

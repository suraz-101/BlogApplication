const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Tile is missing"] },
    tags: { type: String }, //["Science", "mern-stack"] ??
    content: { type: String },
    slug: { type: String, required: true, unique: true },
    author: {
      type: ObjectId,
      ref: "Users",
      required: [true, "Author is missing"],
    },
    comments: { type: Number, default: 0 },
    words: { type: Number, default: 0 },
    status: { type: String, enum: ["published", "draft"], default: "draft" },
    blogImage: { type: String }, // [ published, draft] ??
    // createAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const BlogModel = new mongoose.model("Blog", blogSchema);

module.exports = BlogModel;

//instead of wrting above two line of code we can write follwoing code

// module.exports = new model("Blog" , blogSchemna);

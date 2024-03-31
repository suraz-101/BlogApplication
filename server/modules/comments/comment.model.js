const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const commentSchema = new mongoose.Schema({
  comment: { type: String, required: [true] },
  postedBy: { type: ObjectId, ref: "Users", required: true },
  postedTo: { type: ObjectId, ref: "Blog", required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const commentModel = new mongoose.model("comments", commentSchema);

module.exports = { commentSchema, commentModel };

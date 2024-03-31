const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  role: { type: String, default: "user" },
});

const roleModel = new mongoose.model("role", roleSchema);

module.exports = roleModel;

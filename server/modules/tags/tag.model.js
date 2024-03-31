const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({});

const tagModel = new mongoose.model("tag", tagSchema);

module.exports = tagModel;

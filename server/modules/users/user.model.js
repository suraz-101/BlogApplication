const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is mandatory"] },
    email: {
      type: String,
      required: [true, "Please provide the email"],
      unique: [true, "Email must be unique"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      select: false, //exclude password
    },
    gender: { type: String, required: [true, "Gender is mandatory"] },
    profilePic: { type: String },
    phoneNumber: {
      type: Number,
      required: [true, "Please provide contact details"],
    },
    role: {
      type: [String],
      enum: ["admin", "user"],
      default: "user",
      required: true,
    },
    otp: { type: String },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const userModel = new mongoose.model("Users", userSchema);

module.exports = userModel;

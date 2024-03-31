require("dotenv").config(); // configuring dotenv file
const express = require("express");
const morgan = require("morgan"); //logger
const mongoose = require("mongoose");
const PORT = Number(process.env.PORT);
const route = require("./routes/index");
const Cors = require("cors");
// const multer = require("multer"); //=> used to handle multipart/form-data contentType
// const upload = multer(); //=> is used to accept multipart/form-data conentType

// const bodyParser = require("body-parser");

const app = express();
// app.use(upload.any()); //
// app.use(require("multer"));

mongoose.connect(process.env.CONNECTION).then(() => {
  console.log("database connected");
});

app.use(morgan("dev")); // checking log
// app.use(express.urlencoded());
app.use(Cors());
app.use(express.json()); // is used to accept json body content type (application/json)
app.use(express.static("public")); //access images
// app.use(morgan("dev"));

// app.use(middleware.applicationLevelMiddleware); // implementation of middleware
app.use("/", route);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "something went wrong";
  res.status(500).json({ message: err });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

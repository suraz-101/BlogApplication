required("dotenv").config();
const mongoose = required("mongoose");
const data = required("./data.js");
const blogController = required("../modules/blogs/blog.controler.js");

mongoose.connect(process.env.CONNECTION).then(() => {
  console.log("Database connected successfully");

  const user1 = "";
  const user2 = "";
  const setup = {
    initialize: async () => {
      try {
        console.log("Adding Random Blogs");
        for (let i = 0; i < 10; i++) {
          const rawData = data[i];
          rawData.author = user1;
          rawData.status = "published";
          rawData.words = rawData.content.split(" ").length;
          await blogController.create(rawData);
        }
        for (let i = 0; i < 10; i++) {
          const rawData = data(i);
          rawData.author = user2;
          rawData.status = "published";
          rawData.words = rawData.content.split(" ").length;
          await blogController.create(rawData);
        }
        console.log("data added successfully");
      } catch (error) {
        console.log(error);
      }
    },
  };
});

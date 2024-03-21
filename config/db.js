const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const taskRouter = require("../controllers/TaskController");
// const express = require("express");
// const app = express();
// Connect MongoDB at default port 27017.
mongoose
  .connect("mongodb://localhost:27017/DatabaseXuong", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

// //
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
// //
// app.use("/", taskRouter);

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log("Server đnag chạy ở cổng 5000");
// });

const express = require("express");
const router = express.Router();
const task = require("../models/TaskModel");

// http://localhost:3000/tasks
router.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await task.find(); //lấy về toàn bộ công việc có trong bảng
    res.json(tasks);
  } catch (err) {
    console.log("ERR: " + err);
  }
});

// http://localhost:3000/tasks/add
router.post("/tasks/add", async (req, res, next) => {
  try {
    const newTask = new task(req.body); //tạo đối tượng mới từ dữ liệu
    const saveTask = await newTask.save(); //lưu vào bảng dữ liệu
    res.status(200).json(saveTask);
  } catch (err) {
    console.log("ERR: " + err);
  }
});

// http://localhost:3000/tasks/update/123456
router.put("/tasks/update/:_id", async (req, res, next) => {
  try {
    await task.findByIdAndUpdate(req.params._id, req.body);
    res.status(200).json("Task updated successfully");
  } catch (err) {
    console.log("ERR: " + err);
  }
});

// http://localhost:3000/tasks/delete/123456
router.delete("/tasks/delete/:_id", async (req, res, next) => {
  try {
    await task.findByIdAndDelete(req.params._id);
    res.status(200).json("Task deleted successfully");
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;

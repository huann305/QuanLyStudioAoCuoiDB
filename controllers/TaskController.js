const express = require("express");
const router = express.Router();
const Task = require("../models/TaskModel");

//get all tasks
router.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 }); //lấy về toàn bộ công việc có trong bảng
    res.json(tasks);
  } catch (err) {
    console.log("ERR: " + err);
  }
});

//get task by id
router.get("/tasks/:id", async (req, res, next) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (err) {
    console.log("ERR: " + err);
  }
})

//add task
router.post("/tasks", async (req, res, next) => {
  try {
    const newTask = new Task(req.body); //tạo đối tượng mới từ dữ liệu
    const saveTask = await newTask.save(); //lưu vào bảng dữ liệu
    res.status(200).json({
      message: "Task created successfully",
      data: saveTask,
    });
  } catch (err) {
    console.log("ERR: " + err);
  }
});

router.put("/tasks/:id", async (req, res, next) => {
  try {
    const result = await Task.findByIdAndUpdate(req.params.id, req.body);
    if(result) {
      res.status(200).json({
        message: "Task updated successfully",
        data: result
      });
    }else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (err) {
    console.log("ERR: " + err);
  }
});

router.delete("/tasks/:id", async (req, res, next) => {
  try {
    const result = await Task.findByIdAndDelete(req.params.id);
    if(result) {
      res.status(200).json({
        message: "Task deleted successfully",
        data: result
      });
    }else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

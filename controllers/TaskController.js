const express = require("express");
const router = express.Router();
const task = require("../models/TaskModel");

// http://localhost:3000/tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await task.find(); //lấy về toàn bộ công việc có trong bảng
    res.json(tasks);
  } catch (err) {
    console.log("ERR: " + err);
  }
});

// http://localhost:3000/tasks/add
router.post("/tasks/add", async (req, res) => {
  try {
    const {
      taskName,
      dateStart,
      dateEnd,
      idEmployee,
      description,
      note,
      status,
    } = req.body;
    const newTask = new task({
      taskName: taskName,
      dateStart: dateStart,
      dateEnd: dateEnd,
      idEmployee: idEmployee,
      description: description,
      note: note,
      status: status,
    }); //tạo đối tượng mới từ dữ liệu

    await newTask.save(); //lưu vào bảng dữ liệu
    res.json(newTask);
    console.log(newTask);
  } catch (err) {
    console.log("ERR: " + err);
  }
});

// http://localhost:3000/tasks/update/123456
router.put("/tasks/update/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const {
      taskName,
      dateStart,
      dateEnd,
      idEmployee,
      description,
      note,
      status,
    } = req.body;

    await task.findByIdAndUpdate(
      _id,
      {
        taskName: taskName,
        dateStart: dateStart,
        dateEnd: dateEnd,
        idEmployee: idEmployee,
        description: description,
        note: note,
        status: status,
      },
      { new: true }
    );
  } catch (err) {
    console.log("ERR: " + err);
  }
});

// http://localhost:3000/tasks/delete/123456
router.delete("/tasks/delete/:_id", async (req, res) => {
  try {
    let id = req.params._id;
    console.log(id);
    await task.deleteOne({ _id: id });
    res.redirect("../");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

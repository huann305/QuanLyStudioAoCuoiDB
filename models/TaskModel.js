const mongoose = require("mongoose");
// const db = require("../config/db");
//
const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
  },
  dateStart: {
    type: Date,
  },
  dateEnd: {
    type: Date,
  },
  idEmployee: {
    type: String,
  },
  description: {
    type: String,
  },
  note: {
    type: String,
  },
  status: {
    type: String,
  },
});
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;

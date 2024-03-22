const mongoose = require('mongoose');

const Employee_TasksSchema = new mongoose.Schema({
    idEmployee: {type: String, ref: 'Employees'},
    idTask: {type: String, ref: 'Task'},
    status: {type: String},
    note: {type: String},
    dateStart: {type: Date},
    dateEnd: {type: Date},
},{
    timestamps: true,
});

const Employee_Tasks = mongoose.model('Employee_Tasks', Employee_TasksSchema)

module.exports = Employee_Tasks
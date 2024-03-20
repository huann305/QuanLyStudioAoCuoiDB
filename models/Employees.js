const mongoose = require('mongoose');

const EmployeesSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: {type: String},
    fullName: {type: String},
    email: {type: String, unique: true},
    adress: {type: String},
    phoneNumber: {type: String, unique: true},
    note: {type: String},
    role: {type: String}
},{
    timestamps: true,
});

const Employees = mongoose.model('Employees', EmployeesSchema)

module.exports = Employees
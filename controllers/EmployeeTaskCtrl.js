const express = require('express');
const router = express.Router();

const EmployeeTask = require('../models/Employee_Tasks')

router.get('/tasksnemployee', async function(req, res, next) {
    try {
        const tasks = await EmployeeTask.find().populate('idEmployee').populate('idTask');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router
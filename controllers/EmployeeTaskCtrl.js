const express = require('express');
const router = express.Router();

const EmployeeTask = require('../models/Employee_Tasks')

router.get('/tasksnemployee', async function(req, res, next) {
    try {
        const tasks = await EmployeeTask.find().populate('idEmployee').populate('idTask').populate('idCustomer');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//add employee task
router.post('/tasksnemployee', async function(req, res, next) {
    try {
        const newEmployeeTask = new EmployeeTask(req.body);
        const saveEmployeeTask = await newEmployeeTask.save();
        res.status(200).json(saveEmployeeTask);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//update employee task
router.put('/tasksnemployee/:id', async function(req, res, next) {
    try {
        const updateTask = await EmployeeTask.findByIdAndUpdate(req.params.id, req.body).populate('idEmployee').populate('idTask').populate('idCustomer');
        if(updateTask) {
            res.status(200).json(updateTask);
        }else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//get employee task by id task
router.get('/tasksnemployee/:id', async function(req, res, next) {
    try {
        const task = await EmployeeTask.find({ idTask: req.params.id }).populate('idEmployee').populate('idTask').populate('idCustomer');
        if(task) {
            res.json(task);
        }else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//delete employee task
router.delete('/tasksnemployee/:id', async function(req, res, next) {
    try {
        const customers = await EmployeeTask.findByIdAndDelete(req.params.id);
        if(customers) {
            res.status(200).json(customers);
        }else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router
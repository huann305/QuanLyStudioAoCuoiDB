const express = require('express');
const router = express.Router();
const Upload = require('../config/common/upload')

const Employee = require('../models/Employees')

//get all employees
router.get('/employees', async function(req, res, next) {
    try {
        const employees = await Employee.find();
        employees.forEach((employee) => {
            employee.password = undefined
        })
        res.json(employees);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//get employee by id
router.get('/employees/:id', async function(req, res, next) {
    try {
        const employee = await Employee.findOne({ _id: req.params.id });
        if(employee) {
            employee.password = undefined
            res.json(employee);
        }else {
            res.status(404).json({ message: "Employee not found" });
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//add employee with image
router.post('/employees', Upload.single('image'), async function(req, res, next) {
    try {
        const newEmployee = new Employee(req.body);
        const {file} = req
        const urlImage = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`
        newEmployee.image = urlImage
        const saveEmployee = await newEmployee.save();
        saveEmployee.password = undefined
        res.status(200).json(saveEmployee);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//update employee
// router.put('/employees/:id', async function(req, res, next) {
//     try {
//         const updateEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body);
//         if(updateEmployee) {
//             updateEmployee.password = undefined
//             res.status(200).json(updateEmployee);
//         }else {
//             res.status(404).json({ message: "Employee not found" });
//         }
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

//update employee with image
router.put('/employees/:id', Upload.single('image'), async function(req, res, next) {
    try {
        const {file} = req
        const urlImage = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`
        const updateEmployee = await Employee.findByIdAndUpdate(req.params.id, {...req.body, image: urlImage});
        if(updateEmployee) {
            updateEmployee.password = undefined
            res.status(200).json(updateEmployee);
        }else {
            res.status(404).json({ message: "Employee not found" });
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//delete employee
router.delete('/employees/:id', async function(req, res, next) {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if(employee) {
            res.status(200).json(employee);
        }else {
            res.status(404).json({ message: "Employee not found" });
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
module.exports = router
const express = require('express');
const router = express.Router();

const Customers = require('../models/Customers')
//add customers
router.post('/customers', async function(req, res, next) {
    try {
        const newCustomers = new Customers(req.body);
        const saveCustomers = await newCustomers.save();
        res.status(200).json(saveCustomers);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//get all list customers
router.get('/customers', async function(req, res, next) {
    try {
        const customers = await Customers.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
//get customers by id
router.get('/customers/:id', async function(req, res, next) {
    try {
        const customers = await Customers.findOne({ _id: req.params.id });
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
//update customers
router.put('/customers/:id', async function(req, res, next) {
    try {
        const customers = await Customers.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
//delete customers
router.delete('/customers/:id', async function(req, res, next) {
    try {
        const customers = await Customers.findByIdAndDelete(req.params.id);
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
module.exports = router
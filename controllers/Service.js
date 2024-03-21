const express = require('express');
const router = express.Router();

//addService
const Services = require('../models/Services')
router.post('/Services', async function(req, res, next) {
    try {
        const newService = new Services(req.body);
        const saveService = await newService.save();
        res.status(200).json(saveService);
    } catch (error) {
        res.status(500).json(error);
    }
});
//getService
router.get('/Services', async function(req, res, next){
    try {
        const newService = await Services.find();
        res.status(200).json(newService);
    } catch (error) {
        res.status(500).json(error);
    }
});
//UpService
router.put('/:id', async function(req, res, next){
    try {
        await Services.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json("Service updated successfully");
    } catch (error) {
        res.status(500).json(error);
    }
});
//DelService
router.delete('/:id', async function(req, res, next){
    try {
        await Services.findByIdAndDelete(req.params.id);
        res.status(200).json("Service deleted successfully");
    } catch (error) {
        res.status(500).json(error);
    }
});
module.exports = router
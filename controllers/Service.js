const express = require('express');
const router = express.Router();

//addService
const Services = require('../models/services')
router.post('/services', async function(req, res, next) {
    try {
        const newService = new Services(req.body);
        const saveService = await newService.save();
        res.status(200).json(saveService);
    } catch (error) {
        res.status(500).json(error);
    }
});
//getService
router.get('/services', async function(req, res, next){
    try {
        const newService = await Services.find();
        res.status(200).json(newService);
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get('/services/:id', async function(req, res, next){
    try {
        const newService = await Services.findOne({ _id: req.params.id });
        res.status(200).json(newService);
    } catch (error) {
        res.status(500).json(error);
    }
});
//UpService
router.put('/services/:id', async function(req, res, next){
    try {
        const result = await Services.findByIdAndUpdate(req.params.id, req.body);
        if(!result) {
            res.status(404).json({
                message: "Service not found"
            });
        } else {
            res.status(200).json({
                message: "Service updated successfully",
                data : result
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
//DelService
router.delete('/services/:id', async function(req, res, next){
    try {
        const result = await Services.findByIdAndDelete(req.params.id);
        if (!result) {
            res.status(404).json({
                message: "Service not found"
            });
        } else {
            res.status(200).json({
                message: "Service deleted successfully",
                data : result
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
module.exports = router
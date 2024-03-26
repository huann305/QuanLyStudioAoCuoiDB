const express = require('express');
const router = express.Router();

const ServiceDetails = require('../models/ServiceDetails')

//add service details
router.post('/serviceDetails', async function(req, res, next) {
    try {
        const newServiceDetails = new ServiceDetails(req.body);
        const saveServiceDetails = await newServiceDetails.save();
        res.status(200).json(saveServiceDetails);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//get all list service details
router.get('/serviceDetails', async function(req, res, next) {
    try {
        const serviceDetails = await ServiceDetails.find().populate('idService');
        res.status(200).json(serviceDetails);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/serviceDetails/:id', async function(req, res, next) {
    try {
        const serviceDetails = await ServiceDetails.findOne({ _id: req.params.id }).populate('idService');
        if(serviceDetails) {
            res.status(200).json(serviceDetails);
        }else {
            res.status(404).json({ message: "Service Details not found" });
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//delete service details
router.delete('/serviceDetails/:id', async function(req, res, next) {
    try {
        const serviceDetails = await ServiceDetails.findByIdAndDelete(req.params.id);
        if(serviceDetails) {
            res.status(200).json(serviceDetails);
        }else {
            res.status(404).json({ message: "Service Details not found" });
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//get service detail by id service
router.get('/serviceDetails/service/:id', async function(req, res, next) {
    try {
        const serviceDetails = await ServiceDetails.find({ idService: req.params.id }).populate('idService');
        if(serviceDetails) {
            res.status(200).json(serviceDetails);
        }else {
            res.status(404).json({ message: "Service Details not found" });
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.put('/serviceDetails/:id', async function(req, res, next) {
    try {
        const updateServiceDetails = await ServiceDetails.findByIdAndUpdate(req.params.id, req.body);
        if(updateServiceDetails) {
            res.status(200).json(updateServiceDetails);
        }else {
            res.status(404).json({ message: "Service Details not found" });
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router
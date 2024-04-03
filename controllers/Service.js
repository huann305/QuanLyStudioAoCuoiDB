const express = require('express');
const router = express.Router();
const Upload = require('../config/common/upload')
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

//add service with image
// router.post('/services', Upload.single('image'), async function(req, res, next) {
//     try {
//         const newService = new Services(req.body);
//         const {file} = req
//         const urlImage = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`
//         newService.image = urlImage
//         const saveService = await newService.save();
//         res.status(200).json(saveService);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// })

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
//Update Service
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
        console.log(error.message)
        res.status(500).json(error);
    }
});

//update service with image
// router.put('/services/:id', Upload.single('image'), async function(req, res, next){
//     try {
//         const {file} = req
//         const urlImage = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`
//         const result = await Services.findByIdAndUpdate(req.params.id, {...req.body, image: urlImage});
//         if(!result) {
//             res.status(404).json({
//                 message: "Service not found"
//             });
//         } else {
//             res.status(200).json({
//                 message: "Service updated successfully",
//                 data : result
//             });
//         }
//     } catch (error) {
//         res.status(500).json(error);
//     }
// })


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
const express = require('express');
const router = express.Router();

const BillDetails = require('../models/BillDetails')

router.get('/billdetails', async function (req, res, next) {
    try {
        const billdetails = await BillDetails.find();
        res.json(billdetails);
    } catch (err) {
        console.log(err)
    }
})

router.get('/billdetails/:id', async function (req, res, next) {
    try {
        const billdetails = await BillDetails.findOne({ _id: req.params.id });
        if(billdetails) {
            res.json(billdetails);
        }else {
            res.status(404).json({ message: "BillDetails not found" });
        }
    } catch (err) {
        console.log(err)
    }
})

router.post('/billdetails', async function (req, res, next) {
    try {
        const billdetails = new BillDetails(req.body)
        const savebilldetails = await billdetails.save();
        res.json(savebilldetails);
    } catch (err) {
        console.log(err)
    }
})

router.put('/billdetails/:id', async function (req, res, next) {
    try {
        const result = await BillDetails.findByIdAndUpdate(req.params.id, req.body);
        if(result) {
            res.status(200).json({
                message: "BillDetails updated successfully",
                data: result
            });
        }else {
            res.status(404).json({ message: "BillDetails not found" });
        }
    } catch (err) {
        console.log(err)
    }
})

router.delete('/billdetails/:id', async function (req, res, next) {
    try {
        const result = await BillDetails.findByIdAndDelete(req.params.id);
        if(result) {
            res.status(200).json({
                message: "BillDetails deleted successfully",
                data: result
            });
        }else {
            res.status(404).json({ message: "BillDetails not found" });
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = router
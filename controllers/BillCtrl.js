const express = require('express');
const router = express.Router();

const Bill = require('../models/Bills')

//get all bill
router.get('/bills', async function (req, res, next) {
    try {
        const bills = await Bill.find();
        res.json(bills);
    } catch (err) {
        console.log(err)
    }
})

//get bill by id
router.get('/bills/:id', async function (req, res, next) {
    try {
        const bill = await Bill.findOne({ _id: req.params.id });
        if(bill) {
            res.json(bill);
        }else {
            res.status(404).json({ message: "Bill not found" });
        }
    } catch (err) {
        console.log(err)
    }
})

//add bill
router.post('/bills', async function (req, res, next) {
    try {
        const bill = new Bill(req.body)
        const savebill = await bill.save();
        res.json(savebill);
    } catch (err) {
        console.log(err)
    }
})

//update bill
router.put('/bills/:id', async function (req, res, next) {
    try {
        const updatebill = await Bill.findByIdAndUpdate(req.params.id, req.body);
        if(updatebill) {
            res.status(200).json({
                message: "Bill updated successfully",
                data: updatebill
            });
        }else {
            res.status(404).json({ message: "Bill not found" });
        }
    } catch (err) {
        console.log(err)
    }
})

//delete bill
router.delete('/bills/:id', async function (req, res, next) {
    try {
        const result = await Bill.findByIdAndDelete(req.params.id);
        if(result) {
            res.status(200).json({
                message: "Bill deleted successfully",
                data: result
            });
        }else {
            res.status(404).json({ message: "Bill not found" });
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = router
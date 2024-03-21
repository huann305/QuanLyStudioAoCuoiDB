const express = require('express');
const router = express.Router();

const Bills = require('../models/Bills')

//get revenue
router.get('/revenue', async function(req, res, next) {
    try {
        const {startDate, endDate} = req.query
        console.log(startDate, endDate)
        const query = {date: {$gte: startDate, $lte: endDate}}
        const revenue = await Bills.find(query)

        let total = 0
        for(let i = 0; i < revenue.length; i++) {
            total += revenue[i].totalPrice
        }

        res.status(200).json(total)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
router.get('/sales', async function(req, res, next) {
    try {
        const {startDate, endDate} = req.query
        console.log(startDate, endDate)
        const query = {date: {$gte: startDate, $lte: endDate}}
        const revenue = await Bills.find(query)

        res.status(200).json(revenue)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router
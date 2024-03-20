const express = require('express');
const router = express.Router();

const Categories = require('../models/Categories')

router.get('/categories', async function(req, res, next) {
    try {
        const categories = await Categories.find();
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
module.exports = router
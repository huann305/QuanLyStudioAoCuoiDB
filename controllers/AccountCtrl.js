const express = require('express');
const router = express.Router();

const Employees = require('../models/Employees')

//login
router.post('/login', async function(req, res, next) {
    try {
        const username = req.body.username
        const password = req.body.password
        const account = await Employees.findOne({username: username, password: password})
        if (account) {
            res.status(200).json(account)
        } else {
            res.status(404).json(null)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router
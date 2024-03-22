const express = require('express');
const router = express.Router();

const Employees = require('../models/Employees')
const JWT = require('jsonwebtoken')
require('dotenv').config();
const SECRETKEY = process.env.TOKEN_SEC_KEY
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

router.get('/loginauth', async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password
        const account = await Employees.findOne({username: username, password: password})
        if (account) {
            const token = JWT.sign({ id: account._id }, SECRETKEY, { expiresIn: '1h' })
            const refreshToken = JWT.sign({ id: account._id }, SECRETKEY, { expiresIn: '1d' })
            res.json({
                "status": 200,
                "messenger": "Đăng nhâp thành công",
                "data": account,
                "token": token,
                "refreshToken": refreshToken
            })
        } else {
            res.json({
                "status": 400,
                "messenger": "Lỗi, đăng nhập không thành công",
                "data": []
            })
        }

    } catch (e) {
        console.log(e)
    }
})

//register
router.post('/register', async function(req, res, next) {
    try {
        const newAccount = new Employees(req.body);
        const saveAccount = await newAccount.save();
        res.status(200).json(saveAccount);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router
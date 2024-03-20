const express = require('express')
const router = express.Router()
const categoriesController = require('../controllers/CategoriesController')
const accountsController = require('../controllers/AccountCtrl')
const billCtrl = require('../controllers/Statistics')

router.use(categoriesController)
router.use(accountsController)
router.use(billCtrl)

module.exports = router

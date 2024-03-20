const categoriesController = require('../controllers/CategoriesController')
const express = require('express')
const router = express.Router()

router.use(categoriesController)
module.exports = router

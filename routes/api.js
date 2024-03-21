const categoriesController = require("../controllers/CategoriesController");
//
const taskController = require("../controllers/TaskController");
const express = require("express");
const router = express.Router();

router.use(categoriesController);
router.use(taskController);
module.exports = router;

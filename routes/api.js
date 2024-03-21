const express = require("express");
const router = express.Router();
//
const categoriesController = require("../controllers/CategoriesController");
const accountsController = require("../controllers/AccountCtrl");
const taskController = require("../controllers/TaskController");
const billCtrl = require("../controllers/Statistics");
const ServiceController = require("../controllers/Service");

router.use(categoriesController);
router.use(taskController);
router.use(accountsController);
router.use(billCtrl);
router.use(ServiceController);

module.exports = router;

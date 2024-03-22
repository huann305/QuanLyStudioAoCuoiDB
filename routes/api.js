const express = require("express");
const router = express.Router();

const accountsController = require("../controllers/AccountCtrl");
const taskController = require("../controllers/TaskController");
const Statistics = require("../controllers/Statistics");
const ServiceController = require("../controllers/Service");
const billdetailsCtrl = require("../controllers/BillDetailsCtrl");
const billCtrl = require("../controllers/BillCtrl");
const customerCtrl = require("../controllers/CustomerCtrl");
const employeeCtrl = require("../controllers/EmployeeCtrl");
const employeeTaskCtrl = require("../controllers/EmployeeTaskCtrl");
const serviceDetailsCtrl = require("../controllers/ServiceDetailsCtrl");

router.use(taskController);
router.use(accountsController);
router.use(Statistics);
router.use(ServiceController);
router.use(billdetailsCtrl);
router.use(billCtrl);
router.use(customerCtrl);
router.use(employeeCtrl);
router.use(employeeTaskCtrl);
router.use(serviceDetailsCtrl);

module.exports = router;

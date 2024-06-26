const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Define routes for CRUD operations on employees
router.post('/', employeeController.createEmployee);
router.get('/', employeeController.getAllEmployees);


module.exports = router;

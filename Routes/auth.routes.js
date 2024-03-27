const express = require('express');
const router = express.Router();
const authController = require('../controllers/authContoller');

// Define route for user signup
router.post('/signup', authController.signup);

// Define route for user login
router.post('/login', authController.login);

module.exports = router;

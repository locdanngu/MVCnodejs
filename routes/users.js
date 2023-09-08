const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/dangnhap', userController.login);
router.get('/dangxuat', userController.logout);


module.exports = router;

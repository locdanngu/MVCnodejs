const express = require('express');
const router = express.Router();
const homestayController = require('../controllers/homestayController');

router.get('/', homestayController.getHomeStay);


module.exports = router;

const express = require('express');
const router = express.Router();
const homestayController = require('../controllers/homestayController');

router.get('/', homestayController.getHomeStay);
router.get('/search', homestayController.searchCities);

module.exports = router;

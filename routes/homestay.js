var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    const page = 'homestay';
    res.render('homestay', { title: 'Khách sạn' , homestay: 'active', page:page });
});

module.exports = router;

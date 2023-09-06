var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    const cssLink = '<link rel="stylesheet" href="/stylesheets/homestay.css">'; // Mã HTML cho thẻ <link>
    res.render('homestay', { link: cssLink, title: 'Khách sạn' });
});

module.exports = router;

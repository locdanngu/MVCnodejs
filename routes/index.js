var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const cssLink = '<link rel="stylesheet" href="/stylesheets/homepage.css">'; // Mã HTML cho thẻ <link>

  res.render('homepage', { link: cssLink, title: 'Express' });
});

module.exports = router;

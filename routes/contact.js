var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { 
    title: 'ejs' })
  });

module.exports = router;
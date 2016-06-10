var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', user : req.user });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login', user : req.user });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//require the schema model
//read-only routes should go into one file, crud in another file... 
var User = require('../models/User.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

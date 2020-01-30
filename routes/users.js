var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//require the schema model
var User = require('../models/User.js');

/* localhost:3000/users */
router.get('/', function (req, res, next) {
  var q = User.find();
  q.exec(function (err, users) {
    res.render('users', {
      title: 'user list',
      users: users
    });
  });
});


router.post('/new', function (req, res, next) {
  var newuser = new User();
  newuser.lname = req.body.lname;
  newuser.fname = req.body.fname;
  newuser.age = req.body.age;
  newuser.email = req.body.email;
  newuser.password = req.body.password;
  newuser.save(function (err, data) {
    if (err) return console.error(err);
    console.log("user saved to collection");
  });
});


router.post('/edit/:id', function (req, res, next) {

  var q = User.findOneAndUpdate({
    _id: req.params.id
  }, {
    fname: 'chief'
  });
  q.exec(function (err, mydata) {
    console.log("updated");
  })


});

module.exports = router;
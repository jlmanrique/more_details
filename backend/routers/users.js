var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.param('id', function(req, res, next, id){

  req.user = User.random(id);
  next();
});

router.get('/user/:id',function(req,res) { 

  res.json(req.user);
});

router.param('id_more', function(req, res, next, id){

  req.user = User.random_detailed(id);
  next();
});

router.get('/user/:id_more/more',function(req,res) { 

  res.json(req.user);
});

module.exports = router;
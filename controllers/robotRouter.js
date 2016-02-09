var express = require('express');
var robotRouter = express.Router();
var robots = require('../models/robots');
var bodyParser = require('body-parser');
robotRouter.use(bodyParser.urlencoded({
  extended: false}));

// ROUTES

robotRouter.get('/', function(req, res){ res.render('robots/index', {robots: robots})



});





module.exports = robotRouter;
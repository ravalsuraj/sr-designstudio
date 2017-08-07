//Import all dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    passport = require('passport');

// Create our Express application
var app = express();

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Create our Express router
var router = express.Router();

// Initial dummy route for testing
// http://localhost:3000/api
router.get('/', function(req,res){
  res.json({message:"Welcome to the API for Sonal Raval's Design Studio"});
});
// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Server listening to port ' + port);

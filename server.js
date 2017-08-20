// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var pug = require('pug');
var path = require('path');

var Account = require('./models/account');
var Customer = require('./models/customer');
var apiRouter = require('./routes/apiRouter');
var webRouter = require('./routes/webRouter');

var crudControl = require('./controllers/crudControl');

//Connect to the Database
mongoose.connect('mongodb://localhost:27017/srdesignstudio');

// Create our Express application
var app = express();
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({extended:true}));

// view engine and resource setup
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Create our Express router
var router = express.Router();

// Initial dummy route for testing
// http://localhost:3000/api

//apiRouter(app);

// Register all our routes with /api
app.use('/api', apiRouter);
app.use('/', webRouter);

// Start the server
app.listen(port);
console.log('Sonal Raval Design Studio API running on port ' + port);

//

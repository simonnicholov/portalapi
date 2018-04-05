
// init dependencies
var http = require('http');
var express = require('express');
var bodyparser = require('body-parser');
var app = express();

// --------------------------------------------------------- GENERAL VARIABLE  -------------------------------------------------------- //

const port = 8081;

// --------------------------------------------------------- APPLICATION USE ---------------------------------------------------------- //

// //set parser functions for parsing application/json
app.use(bodyparser.json({ limit: '50mb' }));

// //set parser functions for parsing application/json
app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }));

// // set up CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST,GET,OPTIONS,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// --------------------------------------------------------------- WEB --------------------------------------------------------------- //

// define all web router
var webportal = require('./router/portal/web.portal.js');

// implement all web router
app.use('/web/portal', webportal);

// --------------------------------------------------------------- MOBILE ------------------------------------------------------------ //

// define all web router
var mobileportal = require('./router/portal/mobile.portal.js');

// implement all web router
app.use('/mobile/portal', mobileportal);

// --------------------------------------------------------------- PORT ------------------------------------------------------------- //

//set up server listen
app.listen(port, function() {
    console.log('Server is running on port ' + port + ' ...');
});
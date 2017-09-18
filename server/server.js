'use strict'
const http = require('http')
    , express = require('express')
    , app = express()
    , server = http.createServer(app)
    , path = require('path')
    , MongoClient = require('mongodb').MongoClient
    , assert = require('assert')
    , url = 'mongodb://localhost:27017/trial';
//routes
const ordersRoute = require('./routes/orders.route.js')
    , finalResult = require('./routes/finalResult.route.js');//This route is not used

app.use(function(req, res, next) {
 	res.header("Access-Control-Allow-Origin", "*");
 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 	next();
 	});

app.use(express.static('./../'));

app.use('/',(req,res,next)=>{
  console.log('inside routes');
  next();
},ordersRoute, finalResult);

//App server ---------->
module.exports = server.listen(1100, err => {
  if(err){
    throw err
  }
  console.log('ORS Server running on 1100')
})

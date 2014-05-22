var express  = require('express');
var http     = require('http');
var mongoose = require('mongoose');

var app      = express();

app.get('/', function(req,res) {
  res.setHeader('Content-Type', 'application/json');
  res.send{msg: 'hello world!'});
});

var server = http.createServer(app);
app.set('port', process.env.PORT || 3000);
server.listen(app.get('port'), function(){
  console.log('the server is runnong on port' + app.get('port'));

});

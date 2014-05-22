var express  = require('express');
var http     = require('http');
var mongoose = require('mongoose');
var noteRoutes = require('./routes/noteRoutes');
var ideaRoutes = require('./routes/ideaRoutes');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/notes-development');

var app      = express();

app.get('/api/v1/notes', noteRoutes.collection);
app.get('/api/v1/ideas', ideaRoutes.collection);
app.get('/', function(req,res) {
  res.setHeader('Content-Type', 'application/json');
  res.send({msg: 'hello world!'});
});

var server = http.createServer(app);
app.set('port', process.env.PORT || 3000);
server.listen(app.get('port'), function(){
  console.log('the server is running on port ' + app.get('port'));

});

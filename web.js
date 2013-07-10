var express = require('express');
var app = express.createServer(express.logger());
var res = require('res');    
app.get('/', function(request, response) {
    res.render('index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
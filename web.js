var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var ap[]= ;
fs.readFile('index.html',function (err, data) {
    if (err) throw err;
    ap = data ;
});
    
app.get('/', function(request, response) {
  response.send(ap);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
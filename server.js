var express = require('express');
var open = require("open");
var app = express();

app.use('/run',  express.static(__dirname + '/run'));



app.get('/run', function(req, res){
  res.sendFile(__dirname + '/run/run.html');
  
});

app.get('/run/mp', function(req, res){
  res.sendFile(__dirname + '/run/mp/demo/index.html');
});

app.get('/run/app', function(req, res){
  res.sendFile(__dirname + '/run/app/app.html');
});


app.listen(8080);
console.log("server is listening on port 8080");

/*open the application on browser*/
open("http://localhost:8080/run");
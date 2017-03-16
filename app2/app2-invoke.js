var PORT = 8081;
var express = require('express');

var request = require('request');

var app2 = express();
var msg = "Im the second app, app2: ";
var serverip = "";
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  serverip = add;
  console.log(msg + serverip + ":" + PORT);
});

var resp = "";
request('http://localhost:8080/hello', function (error, response, body) {
//  console.log('error:', error); // Print the error if one occurred
//  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
   resp = body;
});

app2.get('/app2-invoke', function(req, res) {

//    res.setHeader("Content-Type", "application/json");

    res.send(msg + serverip + ":" + PORT + ". I also called the hello API and get back: " + resp);

});

app2.listen(PORT, function() {
  console.log('App2 app listening on port ' + PORT)
})

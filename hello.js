var PORT = 8080;
var express = require('express');

var helloapp = express();

var serverip = "";
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  serverip = add;
  console.log('Hello node app server ip: '+serverip);
});

helloapp.get('/hello', function(req, res) {

//    res.setHeader("Content-Type", "application/json");

    res.send("Hello, Im a node app, running on: " + serverip + ":" + PORT);

});

helloapp.listen(PORT, function() {
  console.log('Housing app listening on port ' + PORT)
})

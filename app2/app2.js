var PORT = 8081;
var express = require('express');

var app2 = express();
var msg = "Im the second app, app2: ";
var serverip = "";
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  serverip = add;
  console.log(msg + serverip + ":" + PORT);
});

app2.get('/app2', function(req, res) {

//    res.setHeader("Content-Type", "application/json");

    res.send(msg + serverip + ":" + PORT);

});

app2.listen(PORT, function() {
  console.log('App2 app listening on port ' + PORT)
})

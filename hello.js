var PORT = 8080;
var express = require('express');

var helloapp = express();


helloapp.get('/hello', function(req, res) {

//    res.setHeader("Content-Type", "application/json");

    res.send("Hello, Im a node app");

});

helloapp.listen(PORT, function() {
  console.log('Housing app listening on port ' + PORT)
})

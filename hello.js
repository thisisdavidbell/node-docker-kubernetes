var express = require('express');

var helloapp = express();


helloapp.get('/hello', function(req, res) {

//    res.setHeader("Content-Type", "application/json");

    res.send("Hello, Im a node app");

});

helloapp.listen(80, function() {
  console.log('Housing app listening on port 80.')
})

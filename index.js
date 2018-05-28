var express = require('express');
var serveIndex = require('serve-index');
var app = express();

 var folderPath = process.argv[2];

 /* serves main page */
 // app.get("/", function(req, res) {
 //    res.sendfile('index.html')
 // });

  // app.post("/user/add", function(req, res) {
	// /* some server side logic */
	// res.send("OK");
  // });

 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){
     console.log('static file request : ' + req.params);
     res.sendFile( (folderPath ? folderPath : __dirname) + req.params[0]);
    // serveIndex((folderPath ? folderPath : __dirname) + req.params[0], {'icons': true})
 });

// app.use('/', serveIndex((folderPath ? folderPath : __dirname)+'/', {'icons': true}))

 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });

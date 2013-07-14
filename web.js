var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/hello', function(request, response) {
	response.send('Hello World!');
});


app.get('/testToRemove', function(request, response) {
	var k = fs.readFileSync('./index.html', 'utf8');
	response.send( k );
});

app.get('/', function(request, response) {
	var k = fs.readFileSync('./index.html', 'utf8');

	var buffer = new Buffer(k, 'utf-8');
	response.send( buffer.toString('utf-8') );
});





var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});
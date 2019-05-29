const http = require('http');

http.createServeur(function(request, response) {
	response.writeHead(200, {'Content_Type' : 'text/plain'});
	response.end("Hello, World!\n);
}).listen(process.env.PORT);

console.log('App is running..');


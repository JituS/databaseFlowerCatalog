var http = require('http');
var requestHandler = require('./routes.js');
var server = http.createServer(requestHandler);
server.listen(3000);


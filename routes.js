var fs = require('fs');
var querystring = require('querystring');
var comments = require('./comments.js');
var express = require('express');
var app = express();

app.post('/comment',function(req,res,next){
	var data= '';
	req.on('data',function(chunk){
		data+=chunk;
	});
	req.on('end',function(){
		comments.add(querystring.parse(data));
		comments.getAll(res);
	});
});

app.use(express.static('./public'));

app.get('/comments.js',function(req,res,next){
	comments.getAll(res);
});

module.exports = app;
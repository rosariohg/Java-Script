var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('Hola debug');
})

app.listen(3000,function(err){
	if (err) return console.log('Hay error', process.exit(1));
	console.log('Debug escucha puerto 3000');
})
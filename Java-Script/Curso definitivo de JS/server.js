var express = require('express');
var app = express();

app.set('view engine','pug');

app.get('/',function(req,res){
	res.render('index') //llama al mototr de vistas pug

})

app.listen(3000,function(err){
	if (err) return console.log('Hay error', process.exit(1));
	console.log('Debug escucha puerto 3000');
})
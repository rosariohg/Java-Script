var page = require('page');
var empty = require('empty');
var template = require('./template');

page('/signup',function(ctx,next){
	//main,innerHTML = 'Signup'; // signup
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
})

var page = require('page');

var main = document.getElementById('main-container')

page('/',function(ctx,next){
	main,innerHTML = 'Home'; //home
})

page('/signup',function(ctx,next){
	main,innerHTML = 'Signup'; // signup
})

page.start();
var express = require('express');
var app = express();

// set port of the application
var port = process.env.PORT || 8080;
var thePort = process.env.PORT || 5000;

// set view engine to ejs
app.set('view engine','ejs');

//make express look in bower folder for assets(css/js/img)
app.use(express.static(__dirname + '/bower_components'));

//Set homepage route
app.get('/',function (req,res) {
	//ejs render automatically looks in the views folder for index.ejs
	res.render('index');	
});

//app start to listen
app.listen(port, function(){
	console.log('App is running on port ' + port);
});
var express = require('express');
var app = express();
var PORT = 3000;
//var date = new Date().toString();

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('Private rout hit !');
		next();
	},
	logger: function(req, res,next){
		console.log('Request: ' + new Date().toString() + ' '+ req.method + ' ' +req.originalUrl);
		next();
	}
};
 
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);


app.get('/about',middleware.requireAuthentication , function (req, res) {
  res.send('About Us!');
});

app.use(express.static(__dirname +'/public'));

app.listen(PORT, function(){
	console.log('Express server started @port:' + PORT);
});
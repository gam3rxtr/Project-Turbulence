//VAR
var jsdom = require('jsdom'),
		request = require('request');
// HOME
exports.index = function(req, res){
	request.get({uri: 'http://youtube.com'}, function(err, response, body){
	  if(err && response.statusCode !== 200){console.log('Request error.');}
	  
	  jsdom.env({ html: body, scripts: ['http://code.jquery.com/jquery.min.js']}, function(err, window){
	  	var $ = window.jQuery;
	  	res.render('index', {title: $('title').text()});
	  });
  });
        
  
};
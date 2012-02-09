//VAR
var scrapper = require('../lib/scrapper').scrape;
// HOME
exports.index = function(req, res){
	scrapper("asd", function(data){
		res.render('index', {result:data});
	});
};
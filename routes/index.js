var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

router.get('/', function(req, res) {
 res.render('index', {  //render index.hjs
 	title: 'My App', // bind datafield title to 'My App'
	age: 25 // bin datafield age to 25
	});
});

module.exports = router;

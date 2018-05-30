var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, response) {
  
  
  response.render('index');
  response.end();
});

module.exports = router;

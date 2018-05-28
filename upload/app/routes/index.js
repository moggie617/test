var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  
  response.writeHead(200, {"Content-Type": "text/html"});
  res.render('index');
  res.end();
});

module.exports = router;

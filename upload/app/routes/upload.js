var express = require('express');
var router = express.Router();

var quertstring = require("querystring")
var fs = require("fs")
var formidable = require("formidable")

/* GET users listing. */
router.post('/', function(req, res) {
  console.log("upload...")

  var form = new formidable.IncomingForm();

  form.parse(req,function(error,fields,files){
    fs.unlink("./temp/test.png");
    fs.rename(files.upload.path,"./temp/test.png");
  });

  res.writeHead(200,{"Content-Type":"text/html"});
  res.write("received image");

  res.write("<img src='/show' />");
  res.end();
});



module.exports = router;

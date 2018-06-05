var express = require('express');
var router = express.Router();

var quertstring = require("querystring")
var fs = require("fs")
var formidable = require("formidable")

/* GET users listing. */
router.post('/', function(req, res) {
  console.log("upload...")

  var form = new formidable.IncomingForm();

  form.uploadDir="temp"
  form.keepExtensions=true;

  form.on('file',function(field,file){

    fs.exists("./temp/"+file.name,function(exists){
      if(!exists){
    fs.rename(file.path,form.uploadDir+'/'+file.name);
      }else
        res.send("파일 명이 존재합니다, 임의의 이름으로 저장.");

    })
  });

  form.parse(req,function(error,fields,files){ 
        console.log("pars done");
	});
        
	res.writeHead(200,{"Content-Type":"text/html"});
  	res.write("received image"); 

	res.write(" src='/index'");
	res.end();
});





module.exports = router;

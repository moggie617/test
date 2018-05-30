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
        console.log("pars done");
          
        fs.rename(files.upload.path,"./temp/test.png",function(err){
	if(err){
		fs.unlink("./temp/test.png",function(err){
			throw err;
		});
		fs.renameSync(files.upload.path,"./temp/test.png");
	}
	});
        
	res.writeHead(200,{"Content-Type":"text/html"});
  	res.write("received image"); 

	res.write("<img src='/show' />");
	res.end();
  });
});

function UpErr(error){
   if(error){
    fs.unlink("/temp/test.png");
    fs.rename(files.upload.path,"/temp/test.png");
 
   console.log("upload done");
}
};



module.exports = router;

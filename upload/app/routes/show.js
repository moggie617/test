var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get('/',function(req,res){

    res.writeHead(200,{"Content-Type":"image/png"});
    fs.createReadStream("temp/test.png").pipe(res);
})

module.exports = router;
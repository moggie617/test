var express = require('express');
var router = express.Router();
var fs = require("fs");
var url=require('url');


router.get('/',function(req,res){

    res.send("주소 뒤에 /파일명을 입력해 주세요");
   
})

router.get('/:id',function(req,res){

    var path = req.url;
    var file;

    fs.exists("./temp"+path,function(exist){
        
        console.log("/temp"+path);

        if(exist){
            res.download("./temp"+path);
        }else
            res.send("존재하지 않습니다.")
    })
    

})

module.exports = router;

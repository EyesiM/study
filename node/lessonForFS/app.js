var express = require('express');
var app = express();
var officegen = require('officegen');
var fs = require('fs');
var path = require('path');
var docx = officegen ( 'docx' );
var async = require('async');


app.get('/', function (req, res) {
    var fs = require('fs');
    
    var myData = {
      name:'test',
      version:'1.0'
    }
    
    var outputFilename = './new/my.html';
    fs.exists('./new', function(exist) {
        if(exist) {
            fs.writeFile(outputFilename, JSON.stringify(myData, null, 4), function(err) {
                if(err) {
                  console.log(err);
                } else {
                  console.log("JSON saved to " + outputFilename);
                }
            });
        }else {
            mkdir('./new'); 
            console.log(111);
            fs.writeFile(outputFilename, JSON.stringify(myData, null, 4), function(err) {
                if(err) {
                  console.log(err);
                } else {
                  console.log("JSON saved to " + outputFilename);
                }
            });
        }
    })
    // fs.copyFileSync('./new', './newOne');
    //创建文件夹
    function mkdir(dirpath,dirname){  
            //判断是否是第一次调用  
            if(typeof dirname === "undefined"){   
                if(fs.existsSync(dirpath)){  
                    return;  
                }else{  
                    mkdir(dirpath,path.dirname(dirpath));  
                }  
            }else{  
                //判断第二个参数是否正常，避免调用时传入错误参数  
                if(dirname !== path.dirname(dirpath)){   
                    mkdir(dirpath);  
                    return;  
                }  
                if(fs.existsSync(dirname)){  
                    fs.mkdirSync(dirpath)  
                }else{  
                    mkdir(dirname,path.dirname(dirname));  
                    fs.mkdirSync(dirpath);  
                }  
            }  
    }  
    
});

var server = app.listen(3400, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
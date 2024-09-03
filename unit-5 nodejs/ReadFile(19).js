var http = require("http");
var fs = require("fs");

http.createServer(function(request,response){
    fs.readFile('payment.html',(err,data)=>{
        if(err){
            throw err;
        }
        else{
            response.end(data);
        }
    });
}).listen(7000);
console.log('server running at http://127.0.5.9.7000/');  
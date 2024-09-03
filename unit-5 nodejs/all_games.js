var fs = require('fs');
var http = require('http');
var filename = 'indoor_games.txt';
var indoor = fs.readFileSync(filename);
filename = 'outdoor_games.txt';
var outdoor = fs.readFileSync(filename);

fs.writeFile('games.txt',indoor+outdoor,function(err){
    if(err){
        throw err;
    }
    else{
        console.log('Great !!!! files mergeds successfully');
    }
});
http.createServer(function(request,response){
    fs.readFile('games.txt',(err,data)=>{
        if(err){
            throw err;
        }
        else{
            response.end(data);
        }
    });
}).listen(9000);
console.log('server running at http://127.0.5.9.9000/');  
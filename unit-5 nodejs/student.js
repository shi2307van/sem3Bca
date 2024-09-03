var http = require('http');
var s = `{
    "Rollno":58,
    "Fname":"Shivani",
    "Lname":"Shinde",
    "Mname":"Tukaram",
    "EmailId":"shivanishidne540gamil.com",
    "ContactNo":9023844654,
    "Gender":"Female"
}`

var obj = JSON.parse(s);
http.createServer(function(res,res){
    res.write("ROLLNO :-"+obj.Rollno+"\n"+"First Name :-"+obj.Fname+"\n"+"Middle Name :-"+obj.Mname+"\n"+"Last Name :-"+obj.Lname+"\n"+"Email Id :-"+obj.EmailId+"\n"+"Contact No:-"+obj.ContactNo+"\n"+"Gender :-"+obj.Gender)
    res.end();
}).listen(7000);

console.log("Server Running at 7000");
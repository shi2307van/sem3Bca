var dns = require('dns');
var ip = dns.lookup('vnsgu.com',function(err,address,family){
    console.log('Ip address Of Google.com is'+address);
});
const http = require('http');

const server = http.createServer(function(req, res,){
      res.write(factorial(8).toString())
      res.end()
})
server.listen(8080)


function factorial(X){
    let Y = 1;
 if(X<0){
    return "invalid"
 }
 else if(X==1,0){
    return 1;
 }
 else{
   for(i=2; i<=X; i++){
       Y=Y*i}
       return Y
 }



}
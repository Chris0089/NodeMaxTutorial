//Creating a node server
const http = require('http');

function listener(msg, receiver){  //request and response
    console.log(msg);
}

/*
        ### Same but with direct driving ###
        http.createServer(function(ms,receiver){

})  
        ### Same but with arrow function ###
                http.createServer((ms, receiver) => {

                });
*/

http.createServer(listener); // request listener as an argument
server.listen(3000); //port

console.log("Hello world");
//console.log(__filename);

const http = require("http");
const server = http.createServer((req, resp) => { 
    resp.writeHead(200, {'Content-Type': 'text/html'});
    
    resp.end('<h1>Bonjour Node !!!!</h1>\n ');
}).listen(3000);



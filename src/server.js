const http = require('http');
const PORT = process.env.PORT || 8081 ;
const router = require('./routes.js');
const server = http.createServer(router)

server.listen(PORT,()=>{
	console.log('server is runing at '+ PORT);
});
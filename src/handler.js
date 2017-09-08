const fs = require('fs');
const queryString = require('querystring');

const contentTypes = {
	html: 'text/html',
	css : 'text/css',
	js : 'applecation/js',
	ico : 'image/x-icon',
	jpg : 'image/x-jpg'
}


function handleHomePage(req,res){
	fs.readFile(__dirname + '/../public/index.html',function(err,data){
		if(err){
			res.writeHead(500,{'content-type':'text/html'});
			res.end('<h1>something went wrong in home page</h1>');
		}else{
			res.writeHead(200,{'content-type':'text/html'});
			res.end(data);
		}
	});
}

function handlerErrorPage(req,res){
	fs.readFile(__dirname + '/../public/error.html',function(err,data){
		if(err){
			res.writeHead(500,{'content-type':'text/html'});
			res.end();
		}else {
			res.writeHead(200,{'content-type':'text/html'});
			res.end(data);
		}
	});
}

function genaricRoute(req,res){
	var endPoint = req.url.split('.');
	var path = endPoint[endPoint.length -1];
	fs.readFile(__dirname + '/../public/' + req.url , function(err,data){
		if(err){
			res.writeHead(302,{'Location':'/404'});
			res.end()
		}else{
			res.writeHead(200,{'content-type':contentTypes[path]});
			res.end(data);
		}
	});
}


module.exports = {
	handleHomePage:handleHomePage,
	handlerErrorPage:handlerErrorPage,
	genaricRoute:genaricRoute
}
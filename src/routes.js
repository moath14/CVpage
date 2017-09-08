const handler = require('./handler.js');

function router(req,res){
	var url = req.url;
	if(url === '/'){
		handler.handleHomePage(req,res);
	}else if(url === '/404'){
		handler.handlerErrorPage(req,res);
	}else {
		handler.genaricRoute(req,res);
	}
}

module.exports = router;
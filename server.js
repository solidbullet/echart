//引入模块
const http =require("http");
//引入文件模块
const fs= require("fs");
//创建服务器
const server = http.createServer(function(req,res){
	//设置响应头
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
	//请求的路由地址
	if(req.url == "/" || req.url=="/index.html"){
		fs.readFile("index.html",function(err,data){
			//设置响应头
			res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
			//加载的数据结束
			res.end(data)
		})
	}else if(req.url == "/draw" || req.url=="/draw.html"){
			fs.readFile("draw.html",function(err,data){
				//设置响应头
				res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
				//加载的数据结束
				res.end(data)
			})
	}else{
		res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
			//加载的数据结束
			res.end('<h1> 所需内容未找到404 </h1>')
	}

}).listen(3000)

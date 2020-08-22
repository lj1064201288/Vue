// 实例化网络请求
var http = require("http");

// 创建服务器
var request = http.createServer();


// 当有请求过来的时候执行回调函数
request.on("request", function(req, res){
    console.log("收到请求");
    console.log(req.url);

    res.writeHead(200, {'Content-Type': 'text/html'});  
    res.write('<head><meta charset="utf-8"/></head>'); 
    if (req.url == "/index"){
        res.end("Hello World");
    }else if (req.url == "/product"){
        res.end("Hello product");
    }else {
    
        res.end("<h2>404,NO FOUND, 没有找到此页面</h2>")
    }

    
})


// 设置端口号
request.listen("3000", function(){
    console.log("服务器启动成功了, 可以通过http://127.0.0.1:3000/来进行访问")
});
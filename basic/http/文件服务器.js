'use strict'

var 
    fs = require('fs'),
    path = require('path'),
    http = require('http'),
    url = require('url');

// 从命令行参数获取root目录，默认是当前目录：
 var root = path.resolve(process.argv[2] || '.')
 console.log('Static root dir:' + root);

// 创建服务器
var http = http.createServer(function(request, response) {
    // 获得url的parse
    var passname = url.parse(request.url).pathname;
    // 获得对应的本地文件路径
    var filePath = path.join(root, passname);
    console.log(filePath);
    // 获取文件状态
    fs.stat(filePath, function(err,stats) {
        if(!err && stats.isFile()){
            console.log('200', request.url);
            // 发送200响应
            response.writeHead(200),
            fs.createReadStream(filePath).pipe(response);
        }else {
            // 出错了或者文件不存在
            console.log('404',request.url);
            // 发送404响应
            response.writeHead('404');
            response.end('404 Not Found');
        } 
    })
}) 

http.listen(8888)
console.log('Server is running at http://127.0.0.1:8888')



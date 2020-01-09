//  Node.js是一个编写网络系统和Web应用程序的平台，是围绕事件驱动的非阻塞编程模型构建的。
global.something ='woshidalaohu'
// Web服务器
var http = require('http');

function process_sever(req,res){
    var body = '<h1>Hello World!</h1>';
    var content_length = body.length;
    res.writeHead(200, {
        'Content-Length': content_length,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}
// http.createServer(process_sever).listen(3000);

// 运行该模模块后，在终端输入 curl -i http://localhost:3000，显示：

/**
HTTP/1.1 200 OK
Content-Length: 21
Content-Type: text/plain
Date: Thu, 09 Jan 2020 02:14:42 GMT
Connection: keep-alive
 */



 // Node.js专注于[创建高性能]应用程序。大多数Web应用程序依赖于从磁盘或从另一个网络源读取数据。传统Web服务器使用进程对应每个请求，即启动一个新进程来处理每个Web请求。为每个进程开辟一个新进程请求是一个昂贵的操作，无论是在CPU和内存方面。传统Web服务器使用线程池。

// Node.js使用单个线程来处理请求

function longRunningOperation(callback){
    console.log('longRunningOperation')
    setTimeout(() => {
       callback ()
    }, 3000);
}

function userClicked() {
    console.log('Starting a long operation');
    longRunningOperation(function(){
        console.log('ending a long oparetion')
    })
}

// userClicked();

// 原型和继承
function Shape(){}

Shape.prototype.X = 0;
Shape.prototype.Y =0;
Shape.prototype.move = function (x, y) {
    this.X = x;
    this.Y = y;
}
Shape.prototype.distance_from_origin = function () {
    return Math.sqrt(this.X*this.X + this.Y*this.Y);
}
Shape.prototype.area = function () {
    throw new Error("I don\"t have a form yet");
}
var s = new Shape();
s.move(10,10);
console.log(s.distance_from_origin());


function Square() {}

Square.prototype = new Shape();

Square.prototype.__proto__ = Shape.prototype;

Square.prototype.Width = 0;

Square.prototype.area = function() {
    return this.Width * this.Width;
}

var sq = new Square();
sq.move(-10,-10);
sq.Width = 5;
console.log(sq.area());
console.log(sq.distance_from_origin())

function Rectangle(){}

Rectangle.prototype = new Square();
Rectangle.prototype.__proto__=Square.prototype;
Rectangle.prototype.Height = 0;

Rectangle.prototype.area = function() {
    return this.Width * this.Height
}

var re = new Rectangle();
re.move(10,10);
re.Height = 10;
re.Width = 5;
console.log(re.area());
console.log(re.distance_from_origin())

function shape() { }; //from www.w3cschool.cn
shape.prototype.myValue = 123; 

var bas = new shape(); 
var myItem = new shape(); 

bas.myValue = 456; 
console.log(bas.myValue);

console.log(myItem.myValue); // 123 


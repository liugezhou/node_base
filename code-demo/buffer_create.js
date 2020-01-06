// 创建长度为10字节的Buffer实例：   
var buf1 = new Buffer(13);

// 通过给定的数组创建Buffer实例：
var buf2 = new Buffer([10,20,30,40,50]);

// 通过一个字符串来创建Buffer实例
 var buf3 = new Buffer('https://www.liugezhou.online','utf-8');

 // 写入缓冲区
 // 语法：buf.write(string[,offset[,length]][,encoding])
 len = buf1.write('六个周啊');
 console.log(len);
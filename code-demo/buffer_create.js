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

 // 从缓冲区读取数据
 // 语法： buf.toString([encoding [,start [,end]]])
 var buf4 = new Buffer(26);
for (var i = 0; i<26; i++) {
    buf4[i] = i +97;
}
console.log(buf4.toString('utf-8'));

// 将Buffer转换为json对象
// 语法： buf.JSON()
var buf5 = new Buffer('www.w3cschool.cn');
var json = buf5.toJSON();

console.log(json);
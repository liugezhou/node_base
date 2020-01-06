'use strict'

var fs = require('fs')
// 读取文本文件
fs.readFile('sample.tex','utf-8',function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        // 把一个String对象转换为Buffer
        console.log(Buffer.from(data, 'utf-8'));
    }
})

// 读取二进制文件
fs.readFile('time.png',function(err, data) {
    if(err){
        console.log(err);
    }else{
        console.log(data);
        console.log(data.length + 'bytes');
        // 把一个Buffer对象转换成String：
        console.log(data.toString('utf-8'));
    }
})


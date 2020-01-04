'use strict'

var fs = require('fs')

// 获取文件大小、创建时间等信息
fs.stat('sample.txt', function(err, data){
    if(err) {
        console.log(err);
    } else{
        // 是否是文件
        console.log('isFile:' + stat.isFile());
        // 是否是目录
        console.log('isDirectory:' + stat.isDirectory());
        if(stat.isFile()){
            // 文件大小
            console.log('size: ' + stat.size);
            // 创建时间，Date对象
            console.log('birth time:' + stat.birthtime);
            // 更新时间，Date对象
            console.log('modified time:' + stat.mtime);
        }
    }
})
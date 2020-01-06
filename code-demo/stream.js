// 链式流

var fs = require('fs');

var zlib = require('zlib');

// fs.createReadStream('events.js')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('event.js.zip'));  

//   console.log('文件压缩完成');

  fs.createReadStream('demo.js.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('demo.js'))

 console.log('文件解压完成');
'use strict';

var fs = require('fs');
var data = 'writeFile';
// 异步写文件
fs.writeFile('output.txt', data, function(err) {
  if(err){
      console.log(err);
  }else{
      console.log('write ok.');
  }
})

// 同步写文件
fs.writeFileSync('output.txt',data);
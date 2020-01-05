'use strict'

var crypto = require('crypto');

var hash = crypto.createHash('md5');

// 可任意多次调用update
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex'));
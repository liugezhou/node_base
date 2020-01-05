'use strict'

var crypto = require('crypto');

const hmac = crypto.createHmac('sha256','liugezhou');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

console.log(hmac.digest('hex'));
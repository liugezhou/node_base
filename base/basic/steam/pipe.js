'use strict'

var fs = require('fs')

var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('output.txt');

rs.pipe(ws);
var url = require('url');
var querystring = require('querystring');

var href = 'http://localhost:8888/start?foo=bar&hello=world';

console.log(url.parse(href).pathname)
console.log(url.parse(href).query)
console.log(querystring(href)['foo'])



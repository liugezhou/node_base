var http = require("http");
var url = require("url");
require('colors');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.".red);
  console.log("Server has started.".green);
}

exports.start = start;
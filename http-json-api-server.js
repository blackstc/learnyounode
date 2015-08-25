var url = require('url');
var http = require('http');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
  var endPointArr = url.parse(req.url, true).pathname.split("/");
  var endPoint = endPointArr[endPointArr.length - 1];
  var query;
  var date;
  if (endPoint === "parsetime") {
    query = url.parse(req.url, true).query;
    date = new Date(query.iso);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    }));
  } else {
    query = url.parse(req.url, true).query;
    date = new Date(query.iso);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
      unixtime: date.getTime(),
    }));
  }
});

server.listen(port);

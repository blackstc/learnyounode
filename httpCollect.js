var http = require("http");
var url = process.argv[2];
var bl = require("bl");

http.get(url, function(response) {
  response.pipe(bl(function(err, data) {
    var string = data.toString();
    console.log(string.length);
    console.log(string);
  }));
});

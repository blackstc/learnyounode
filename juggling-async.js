var http = require("http");
var bl = require("bl");
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var contents1;
var contents2;
var contents3;

http.get(url1, function(response) {
  response.pipe(bl(function(err, data) {
    contents1 = data.toString();
  }));
});

http.get(url2, function(response) {
  response.pipe(bl(function(err, data) {
    contents2 = data.toString();
  }));
});

http.get(url3, function(response) {
  response.pipe(bl(function(err, data) {
    contents3 = data.toString();
  }));
});

setTimeout(function() {
  console.log(contents1);
  console.log(contents2);
  console.log(contents3);
}, 5000);


////////////////
//  Solution  //
////////////////

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }
//
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)
//
//       results[index] = data.toString()
//       count++
//
//       if (count == 3)
//         printResults()
//     }))
//   })
// }
//
// for (var i = 0; i < 3; i++)
//   httpGet(i)

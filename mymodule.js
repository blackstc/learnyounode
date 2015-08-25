var fs = require('fs');
var path = require('path');


module.exports = function(directoryName, fileExtension, callback){
  var array = [];
  fs.readdir(directoryName, function (err, list) {
    if (err) {
      return callback(err);
    } else {
      list.forEach(function (file) {
        if (file.indexOf("." + fileExtension) !== -1) {
          array.push(file);
        }
      });
    }
    //need to pass in null as first argument in callback otherwise it will return an error
    callback(null, array);
  });
};

var zlib = require('zlib');
var gzip = zlib.createGzip();
var fs = require('fs');
// var inp = fs.createReadStream('words2.txt');
// var out = fs.createWriteStream('words2.txt.gz');
//
// inp.pipe(gzip).pipe(out);

var gunzip = zlib.createGunzip();
var zipped = fs.createReadStream('words2.txt.gz');
var unzipped = fs.createWriteStream('words3.txt');

var file = zipped.pipe(gunzip).on("end", function (err, data) {
  if (err) {
    console.log('err:', err);
  }
  console.log(data);
});

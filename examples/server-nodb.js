var ac = require('../lib/nodb');
var http = require('http');
var fs = require('fs');
var index = fs.readFileSync(__dirname + '/index.html');

http.createServer(function (req, res) {
  console.log("URL:", req.url);
  var word;
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
  }
  else if (req.url.indexOf('/vote/') > -1) {
    word = req.url.replace('/', '').trim();
    console.log("VOTE!", word);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('great success');
  }
  else {
    word = req.url.replace('/', '').trim();
    console.log('word:', word);
    ac.findWords(word, function (err, words) {
      // var json = { "words" : words };
      // res.writeHead(200, {'Content-Type': 'text/json'});
      res.end(words.join(','));
    });
  }
}).listen(process.env.PORT || 3000);

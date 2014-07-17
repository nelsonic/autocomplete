var ac = require('../');

var http = require('http');
var fs = require('fs');
var index = fs.readFileSync(__dirname+'/index.html');
var client = fs.readFileSync(__dirname+'/client.js');

http.createServer(function (req, res) {
  console.log("URL:",req.url);
  if(req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
  } else if(req.url === '/client.js'){
    res.writeHead(200, {'Content-Type': 'application/javascript'});
    res.end(client);
  } else {
    var word = req.url.replace('/','').trim();
    console.log('word:',word);
    ac.findWords(word, function(err, words){
      var justWords = words.map( function(word) {
        return word.key;
      });
      var json = {"words":justWords};
      // res.writeHead(200, {'Content-Type': 'text/json'});
      res.end(justWords.join(','));
    });
  }
}).listen(3000);

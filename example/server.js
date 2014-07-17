var ac = require('../');

var http = require('http');
var fs = require('fs');
var index = fs.readFileSync(__dirname+'/index.html');
var client = fs.readFileSync(__dirname+'/client.js');

http.createServer(function (req, res) {
  console.log("URL:",req.url);
  var word;
  if(req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
  } else if(req.url.indexOf('/vote/') > -1){
    word = req.url.replace('/','').trim();
    console.log("VOTE!", word);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('great success');
  } else {
    word = req.url.replace('/','').trim();
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
}).listen(process.env.PORT || 3000);

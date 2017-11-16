var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, './public')))

/* doesnt work with static file 
app.get('/', function(req, res) {
  console.log('incoming req');
  res.sendFile(path.join(__dirname, '/public', '/index.html'));
});*/

app.listen(3000, function() {
  console.log('listening on port 3000');
});
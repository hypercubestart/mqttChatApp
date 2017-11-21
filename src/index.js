var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var http = require('http');
var https = require('https');

var mqttServer = require('./mqttServer');

var server = http.createServer(app);
mqttServer.attachHttpServer(server);

var port = 3145; 

//var server = https.createServer(options, app)

//TODO
//implement https
//implement session

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());


//app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false
  /*name: 'session',
  keys: ['key1', 'key2'],
  cookie: {
    secure: true,
    //httpOnly: true,
    domain: 'http://port-3001.chatapp-andrewlliu301347.codeanyapp.com',
    path: '',
    expires: new Date(Date.now() + 60 * 60 * 1000) // 1 hour
  }*/
}));


var io = require('socket.io')(server);

//Routes
app.use(require('./routes'));

app.use(express.static(path.join(__dirname, '../public')));

//serve MQQT websocket client
app.use(express.static(path.dirname(require.resolve("mosca")) + "/public"))



//  io.on('connection', function(socket){
//    console.log('a user connected');
  
//    socket.on('disconnect', function() {
//      console.log('a user disconnected');
//    });
//  });

io.of('/chat').on('connection', function(socket){
  console.log('someone connected');
  
  socket.on('disconnect', function() {
    console.log('someone disconnected');
  })
});

/* doesnt work with static file 
app.get('/', function(req, res) {
  console.log('incoming req');
  res.sendFile(path.join(__dirname, '/public', '/index.html'));
});*/

server.listen(port, function() {
  console.log('listening on port ' + port);
});

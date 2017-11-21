var mosca = require('mosca');

var settings = {
  port: 8001
}

var server = new mosca.Server(settings);
server.on('ready', setup);

//fired when server is ready
function setup() {
  console.log('Mosca server is up and running');
}

//fired when a client is connected
server.on('clientConnected', function(client) {
  console.log('client connected', client.id);
});

// fired when a client subscribes to a topic
server.on('subscribed', function(topic, client) {
  console.log('subscribed : ', topic);
});

// fired when a client subscribes to a topic
server.on('unsubscribed', function(topic, client) {
  console.log('unsubscribed : ', topic);
});

// fired when a client is disconnecting
server.on('clientDisconnecting', function(client) {
  console.log('clientDisconnecting : ', client.id);
});

// fired when a client is disconnected
server.on('clientDisconnected', function(client) {
  console.log('clientDisconnected : ', client.id);
});

module.exports = server;
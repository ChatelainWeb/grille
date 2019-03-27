// Variable port setting for heroku

var port = process.env.PORT || 3000;


var http = require('http');
var express = require('express'),
    app = module.exports.app = express();

var server = http.createServer(app);
var io = require('socket.io').listen(server);  //pass a http.Server instance
server.listen(port);  //listen on port 80


// Heroku setting for long polling - assuming io is the Socket.IO server object
io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 10); 
});

// routing
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {

    // Dès qu'on reçoit un "steve" on renvoit a tous un classsteve
    socket.on('steve', function () {
		// On signale aux autres clients qu'il y a un nouveau venu
		socket.broadcast.emit('steveclass');
    }); 
	
	socket.on('paul', function () {
		// On signale aux autres clients qu'il y a un nouveau venu
		socket.broadcast.emit('paulclass');
    }); 
	
	socket.on('fanny', function () {
		// On signale aux autres clients qu'il y a un nouveau venu
		socket.broadcast.emit('fannyclass');
    }); 
	
	socket.on('alex', function () {
		// On signale aux autres clients qu'il y a un nouveau venu
		socket.broadcast.emit('alexclass');
    }); 
	
});

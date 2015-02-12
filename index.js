var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});*/

app.use(express.static(__dirname + '/public' ));

io.on('connection', function(socket){
  console.log('usuario conectado');
  socket.on('disconnect', function(){
    console.log('usuario a la verga');
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});

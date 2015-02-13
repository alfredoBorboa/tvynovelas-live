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
    console.log('usuario desconectado');
  });

  socket.on('aCandidato1Jurado1', function(msg){
    io.emit('voto', msg);
    console.log("voto");
  });

  socket.on('aCandidato2Jurado1', function(msg){
    io.emit('voto', msg);
    console.log("voto");
  });

  socket.on('aCandidato3Jurado1', function(msg){
    io.emit('voto', msg);
    console.log("voto");
  });

  socket.on('aCandidato4Jurado1', function(msg){
    io.emit('voto', msg);
    console.log("voto");
  });

  socket.on('aCandidato5Jurado1', function(msg){
    io.emit('voto', msg);
    console.log("voto");
  });

});//termina io.on


http.listen(3000, function(){
  console.log('listening on *:3000');
});

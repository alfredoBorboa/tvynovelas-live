var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public' ));

io.on('connection', function(socket){
  console.log('usuario conectado');
 
  socket.on('disconnect', function(){
    console.log('usuario desconectado');
  });

  // categoria A jurado 1
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

  // categoria A jurado 2
  socket.on('aCandidato1Jurado2', function(msg){
    io.emit('voto', msg);
    console.log("voto");
  });

  socket.on('aCandidato2Jurado2', function(msg){
    io.emit('voto', msg);
    console.log("voto");
  });

  socket.on('aCandidato3Jurado2', function(msg){
    io.emit('voto', msg);
    console.log("voto");
  });

  socket.on('aCandidato4Jurado2', function(msg){
    io.emit('voto', msg);
    console.log("voto");
  });

  socket.on('aCandidato5Jurado2', function(msg){
    io.emit('voto', msg);
    console.log("voto");
  });

});//termina io.on


http.listen(3000, function(){
  console.log('listening on *:3000');
});

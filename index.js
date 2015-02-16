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


  socket.on( "votoDesdeJurado", function( msg ){
      io.emit( "votoHaciaMonitor", msg );
  });
    
  socket.on( "convocaSegundaVotacion", function( msg ){
      io.emit( "ordenaSegundaVotacion", msg );
  });

});//termina io.on


http.listen(3000, function(){
  console.log('listening on *:3000');
});

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
    
   socket.on( "activaOverlayLogoDesdeMonitor", function( msg ){
      io.emit( "activaOverlayLogoVotante", msg );
  });
    
     socket.on( "desactivaOverlayLogoDesdeMonitor", function( msg ){
      io.emit( "desactivaOverlayLogoVotante", msg );
  });
    
  /*socket.on( "siguienteSeccionMonitor", function( msg ){
      io.emit( "siguienteSeccionVotante", msg );
  });*/
  //--------------------cues para secciones en teclas  
    socket.on( "veaA", function( msg ){
        io.emit( "jveaA", msg );
    });
    
    socket.on( "veaB", function( msg ){
        io.emit( "jveaB", msg );
    });
    
    socket.on( "veaC", function( msg ){
        io.emit( "jveaC", msg );
    });
    
    socket.on( "veaD", function( msg ){
        io.emit( "jveaD", msg );
    });
    
    socket.on( "veaE", function( msg ){
        io.emit( "jveaE", msg );
    });
    
    socket.on( "veaF", function( msg ){
        io.emit( "jveaF", msg );
    });
    
    socket.on( "veaG", function( msg ){
        io.emit( "jveaG", msg );
    });
    
    socket.on( "veaH", function( msg ){
        io.emit( "jveaH", msg );
    });
    
    socket.on( "veaI", function( msg ){
        io.emit( "jveaI", msg );
    });
    
    socket.on( "veaK", function( msg ){
        io.emit( "jveaK", msg );
    });
    
    socket.on( "veaL", function( msg ){
        io.emit( "jveaL", msg );
    });
    
    socket.on( "veaM", function( msg ){
        io.emit( "jveaM", msg );
    });
    
    socket.on( "veaN", function( msg ){
        io.emit( "jveaN", msg );
    });
    
    socket.on( "veaO", function( msg ){
        io.emit( "jveaO", msg );
    });
    
    socket.on( "veaP", function( msg ){
        io.emit( "jveaP", msg );
    });
    
    socket.on( "veaQ", function( msg ){
        io.emit( "jveaQ", msg );
    });
    
    socket.on( "veaR", function( msg ){
        io.emit( "jveaR", msg );
    });
    
    socket.on( "veaS", function( msg ){
        io.emit( "jveaS", msg );
    });
    
    socket.on( "veaT", function( msg ){
        io.emit( "jveaT", msg );
    });
    
    socket.on( "veaU", function( msg ){
        io.emit( "jveaU", msg );
    });
    
    socket.on( "veaV", function( msg ){
        io.emit( "jveaV", msg );
    });
//--------------------cues para secciones en teclas  
    
    socket.on( "mandaImprimir", function( msg ){
      io.emit( "imprime", msg );
    }); 
    
    socket.on( "mandaRefresh", function( msg ){
      io.emit( "recibeRefresh", msg );
    });

});//termina io.on


http.listen(3000, function(){
  console.log('listening on *:3000');
});

var express=require('express');
var app=express();
var http=require('http').Server(app);
//Usando socket.io
var io=require('socket.io')(http);

app.use(express.static(__dirname + '/public'));//Aqui se seviran archivos estaticos

var port=process.env.PORT || 3000; //Esto lo exige heroku

app.get('/',function(req, res){
	res.sendFile(__dirname + '/index.html');//Ruta página index.html
});	

http.listen(port,function(){
	console.log('Escuchando en el puerto: ' + port);
});

var countsocket=0;//contador de conecciones al server

io.on('connection',funtion(socket){
      console.log('usuario conectado...');
      countsocket++;
//emitiendo sms de los usuarios conectados
       io.sockets.emit('usuarios conectado',countsocket);
      });
//cerrar coneccion
socket.on('disconnect',funtion(){
	  coutsocket--;//
	  console.log('usuario desconectado');//mensaje en consola
          io.sockets.emit('usuario desconectado')//sms a todos los clientes
	  });

var express=require('express');
var app=express();
var http=require('http').Server(app);
//usando socket.io
var io=require('socket.io')(http);

app.use(express.static(__dirname+'/public'));//aqui se serviran los archivos estaticos

var port=process.env.PORT || 3000;//esto lo exige geroku

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');//ruta pag index
});

http.listen(port,function(){
	console.log('Escuchado en el puerto: '+port)
});

http.listen(port, funcition() {
	    console.log('Escuchando en el puerto:'+port)//mensajeconsola
	    });

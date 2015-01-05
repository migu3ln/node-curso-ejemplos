/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var msjs = [];
var peticionesPendientes = [];
var puerto = 3000;

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var cons = require('consolidate');//Servidor web ne los templates
server.listen(puerto);
//
//app.get('/', function(req, res) {
//    res.send('Hello World');
//    console.log("entro");
//});
////
//app.get('/contacto', function(req, res) {
//    res.send('Hello Peticion de contacto');//Retornar algo al usuario
//    console.log("peticiones a rutas");
//});
////Rutas Complejas
//app.get('/mensajes/new/:mensaje', function(req, res) {
//    msjs.push(req.params.mensaje);
//    peticionesPendientes.forEach(function(res) {
//        res.send(msjs + '<script>function(){window.location.reload()};</script>');
//
//    });
//    res.send('Tu msj es: ' + req.params.mensaje);
//});
////MOstrar las listas d msjs almacenadas en l servidor
//app.get('/listMsjs', function(req, res) {
//    peticionesPendientes.push(res);
////    res.send(msjs + "<script>setTimeout(function(){window.location.reload()},3000);</script>");
//
//});
//
//app.listen(puerto);
//console.log("Express esta corriendo at\n" + puerto);
app.engine('.html', cons.jade);//definir motor d plantillas 
app.set('view engine', 'html');//archivos d html jade
app.use(express.static('./public'));//archiovos estaticos
app.get('/', function(req, res) {
    res.render('index', {
        titulo: "Hola"
    });

});
var clicks = 0;
io.sockets.on('connection', function(socket) {
    console.log("conectao");
    socket.on('pintar', function(data) {

        socket.broadcast.emit('pintar', data);
    });
    //Emitimos nuestro evento connected
    socket.emit('connected');
    //Permanecemos a la escucha del evento click
    socket.on('click', function() {
        //Sumamos el click
        clicks++;
        console.log(clicks);
        //Emitimos el evento que dirá al cliente que hemos recibido el click
        //y el número de clicks que llevamos
        socket.broadcast.emit('otherClick', clicks);
    });
});

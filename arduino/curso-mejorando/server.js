var io = require('socket.io').listen(3000);
console.log("ss");
clicks = 0;
io.sockets.on('connection', function(socket) {
    console.log("conectado");
//
//    socket.on('prender', function(data, callback) {
//        console.log("prender");
//        //Comprobamos que el nombre no esta en uso, o contiene caracteres raros.
//        if (data.prender) {
//            callback(on_OffLed(data.prender));
//        }
//        else {
//            callback(on_OffLed(data.prender));
//        }
//
//    });
    //Emitimos nuestro evento connected
    //Devolvemos el ping con los milisegundos al cliente para que pueda calcular la latencia.
    socket.on('ping', function(data, callback) {
        if (callback && typeof callback == 'function') {
            callback(data);
        }
    });
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
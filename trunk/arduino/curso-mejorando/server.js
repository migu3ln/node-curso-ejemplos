var io = require('socket.io').listen(3000);
console.log("ss");
clicks = 0;
io.sockets.on('connection', function(socket) {
    console.log("conectado");
    //Emitimos nuestro evento connected
    //Devolvemos el ping con los milisegundos al cliente para que pueda calcular la latencia.
    socket.on('ping', function(data, callback) {
        if (callback && typeof callback == 'function') {
            callback(data);
        }
    });
    //Si llega un mensaje del chat de un usuario lo limpiamos y reenviamos a todos los demás.
    socket.on('msg', function(data) {
        io.sockets.emit('msg', data);
    });

    socket.on('mostrarInfo', function(data) {
        console.log("data", data);
        console.log("clicks" + clicks);
        io.sockets.emit('mostrarInfo', clicks);
    }
    );
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
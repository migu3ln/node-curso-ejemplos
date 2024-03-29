var express = require('express'),
        app = express(),
        server = require('http').createServer(app),
        sanitizer = require('sanitizer'),
        io = require('socket.io').listen(server, {
    'log level': 2
});
$numeros = 0;
$cambiar = true;
puerto = 3000;
server.listen(puerto);
app.engine('.html', require('ejs').renderFile); //definir motor d plantillas 
app.set('view engine', 'html'); //archivos d html jade
app.use(express.static('./public')); //archiovos estaticos
app.get('/', function(req, res) {
    res.render('index');
//    res.sendfile('../views/index.html');

});
var usuarioConectados = [];
var usuarios = [], //Array con los nombres de usuarios.
        jugadores = [], //Array con los nombres de los jugadores
        tablero = ['', '', '', '', '', '', '', '', ''], //Estado del tablero
        turno = false, //Indica el jugador al que le toca jugar
        jugadas = 0; //Contador de jugadas para saber cuando declarar empate.

//Devuelve la figura del jugador.
var figura = function(jugador) {
    var figuras = ['X', 'O'];
    return figuras[jugador - 1];
};
$dataReport = {};
function cambiarDatos($cambio, $conectados, $mostrar) {
    if ($cambio) {
        $numeros = $conectados;
        $cambiar = $mostrar;
    }
    $columns = {
        title: {text: ""},
        credits: {
            enabled: false
        },
        chart: {
            marginTop: "35",
            height: "320",
            type: "column"
        },
        plotOptions: {
            column: {
                depth: 70
            }},
        tooltip: {
            pointFormat: "{series.name}: <b>{point.y:.2f}<\/b>"
        },
        xAxis: {
            categories: ["Conectados"]
        },
        yAxis: {
            title: {
                text: "Conectados"},
            allowDecimals: true
        },
        series:
                [
                    {
                        name: "Conectados",
                        data: [$numeros]
                    }
                ],
        cambiar: {
            mostrar: $cambiar
        }

    };
//    dataReport = {
//        chart: {
//            plotBackgroundColor: null,
//            plotBorderWidth: 1, //null,
//            plotShadow: false
//        },
//        title: {
//            text: 'Usuarios Conectados'
//        },
//        tooltip: {
//            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//        },
//        plotOptions: {
//            pie: {
//                allowPointSelect: true,
//                cursor: 'pointer',
//                dataLabels: {
//                    enabled: true,
//                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
//                    style: {
//                        color: 'black'
//                    }
//                }
//            }
//        },
//        series: [{
//                type: 'pie',
//                name: 'Browser share',
//                data: [
//                    ['Desconectados', 1],
//                    {
//                        name: 'Conectados',
//                        y: $numeros,
//                        sliced: true,
//                        selected: true
//                    }
//
//                ]
//            }],
//        cambiar: {
//            mostrar: $cambiar
//        }
//    };
    return $columns;
}
//Se comprueban todas las jugadas posibles
var comprobarTablero = function(tablero) {

    var r = false, t = tablero;
    if ((t[0] == t[1]) && (t[0] == t[2]) && (t[0] !== '')) { //Primera fila
        r = true;
    } else if ((t[3] == t[4]) && (t[3] == t[5]) && (t[3] !== '')) { //Segunda fila
        r = true;
    } else if ((t[6] == t[7]) && (t[6] == t[8]) && (t[6] !== '')) { //Tercera fila
        r = true;
    } else if ((t[0] == t[3]) && (t[0] == t[6]) && (t[0] !== '')) { //Primera columna
        r = true;
    } else if ((t[1] == t[4]) && (t[1] == t[7]) && (t[1] !== '')) { //Segunda columna
        r = true;
    } else if ((t[2] == t[5]) && (t[2] == t[8]) && (t[2] !== '')) { //tercera columna
        r = true;
    } else if ((t[0] == t[4]) && (t[0] == t[8]) && (t[0] !== '')) { //Primera diagonal
        r = true;
    } else if ((t[6] == t[4]) && (t[6] == t[2]) && (t[6] !== '')) { //Segunda diagonal
        r = true;
    }

    return r;
};
var clicks = 0;
function prenderLed() {
//    console.log("ss");
    try {
        var LEDPIN = 13;
        var OUTPUT = 1;
        var five = require("johnny-five"),
                board, led;
        board = new five.Board();
        board.on("ready", function() {
            var val = 0;
            // Set pin 13 to OUTPUT mode
            this.pinMode(LEDPIN, OUTPUT);
            // Create a loop to "flash/blink/strobe" an led
            this.loop(100, function() {
                this.digitalWrite(LEDPIN, (val = val ? 0 : 1));
            });
            console.log("conectado a la placa");
        });
    } catch (e) {
        console.log("conecte la placa", e);
    }



}
count = 0;
//Al conectarse un usuario
io.sockets.on('connection', function(socket) {
//    prenderLed();
    $dataReport = cambiarDatos(true, $numeros, true);
    $numeros++;
    console.log("cuantos usuarios", $numeros);
    var desconectarAmbosJugadores = function() {
        jugadores = [];
        tablero = ['', '', '', '', '', '', '', '', ''];
        turno = false;
        jugadas = 0;
        io.sockets.emit('desconectarAmbosJugadores', true);
        //Recorremos todos los sockets abiertos y eliminamos el tag de jugador
        for (var i in io.sockets.sockets) {

            if (io.sockets.sockets[i].jugador) {
                delete io.sockets.sockets[i].jugador;
            }
        }
    };
    //Enviamos al usuarios los datos que debe ver en pantalla al entrar, como estado del tablero y jugadores
    socket.emit('conexion', {'jugadores': jugadores, 'tablero': tablero});
    //Devolvemos el ping con los milisegundos al cliente para que pueda calcular la latencia.
    socket.on('ping', function(data, callback) {
        if (callback && typeof callback == 'function') {
            callback(data);
        }
    });
    //Al enviar el nombre de un nuevo usuario lo comprobamos.
    socket.on('comprobarUsuario', function(data, callback) {

        data = sanitizer.escape(data);
        //Comprobamos que el nombre no esta en uso, o contiene caracteres raros.
        if (usuarios.indexOf(data) >= 0) {
            callback({ok: false, msg: 'Este nombre esta ocupado'});
        } else {
            //Enviamos su nick comprobado al usuario.
            callback({ok: true, nick: data, reporte: $dataReport});
            socket.nick = data;
            usuarios.push(data);
            console.log('Usuario conectado: ' + socket.nick);
            //Enviamos a todos los usuarios que se ha unido uno nuevo.
            io.sockets.emit('nuevoUsuario', {nick: data, listaUsuarios: usuarios});
        }

    });
    socket.on('prender', function(data, callback) {
        console.log("prender");
        //Comprobamos que el nombre no esta en uso, o contiene caracteres raros.
        if (data.prender) {
            callback(on_OffLed(data.prender));
        }
        else {
            callback(on_OffLed(data.prender));
        }

    });
    //Recibimos la petición de nuevo jugador y enviamos respuesta
    socket.on('nuevoJugador', function(data, callback) {

        if (jugadores.length < 2 && !socket.jugador) {
            jugadores.push(socket.nick);
            callback({ok: true, 'jugador': jugadores.length});
            socket.jugador = jugadores.length;
            io.sockets.emit('nuevoJugador', {nick: socket.nick, 'jugador': jugadores.length});
            //Si estan los dos jugadores empezamos la partida dandole el turno al primero.
            if (jugadores.length == 2) {
                turno = 1;
                io.sockets.emit('turno', {'turno': 1, 'tablero': tablero});
            }
        }

    });
    //Al recibir una jugada se comprueba que esa casilla del tablero está vacia y si se ha ganado o no.
    socket.on('marcarCelda', function(data) {
        if (socket.jugador == turno && tablero[data] === '') {
            tablero[data] = figura(turno);
            jugadas++;
            //Comprobamos si ha ganado con esta jugada
            if (comprobarTablero(tablero)) {
                io.sockets.emit('turno', {'turno': turno, 'tablero': tablero, 'ganador': jugadores[turno - 1]});
                desconectarAmbosJugadores();
            } else if (jugadas == 9) { //Empate
                io.sockets.emit('turno', {'turno': turno, 'tablero': tablero, 'empate': true, 'jugadores': jugadores});
                desconectarAmbosJugadores();
            } else { //Una jugada normal
                turno = (turno == 1) ? 2 : 1;
                io.sockets.emit('turno', {'turno': turno, 'tablero': tablero});
            }

        }
    });
    socket.on('mostrarInfo', function(data) {
        console.log("data", data);
        console.log($dataReport);
        io.sockets.emit('mostrarInfo', $dataReport);
    }
    );
    //Si llega un mensaje del chat de un usuario lo limpiamos y reenviamos a todos los demás.
    socket.on('msg', function(data) {
        console.log(data);
        $cambiar = false;
        data.msg = sanitizer.escape(data.msg);
        $numeros++;
        $dataReport = cambiarDatos(true, $numeros, false);
        console.log("cambiado", $dataReport);
        console.log($numeros);
        io.sockets.emit('msg', data);
    });
    //Cuando un usuario se desconecta se comprueba que estaba en el chat, y se informa y actualiza la lista del resto de usuarios.
    socket.on('disconnect', function() {

        if (socket.nick) {
            usuarios.splice(usuarios.indexOf(socket.nick), 1);
            io.sockets.emit('desconectarUsuario', {nick: socket.nick, listaUsuarios: usuarios});
            console.log('usuario desconectado: ' + socket.nick);
            //Si era un jugador en activo sacan ambos de la partida
            if (socket.jugador) {
                if (jugadores.length == 2) {
                    desconectarAmbosJugadores();
                } else { //Si estaba solo en la partida eliminamos su nombre de la partida

                    jugadores.splice(jugadores.indexOf(socket.nick), 1);
                    io.sockets.emit('desconectarJugador', {nick: socket.nick, jugador: socket.jugador});
                }
            }

        }

    });
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
function on_OffLed(encender) {
    info = {};
    if (encender) {
        info = {encender: encender};
    }
    else {
        info = {encender: encender};
    }
    // Create a standard `led` on pin 13
//    led = new five.Led(13);
//    pingMode(led, OUTPUT);
//    digitalWrite(led, HIGH);
//    delay(1000);
//    digitalWrite(led, LOW);
//    delay(1000);
    // "strobe" the led in 100ms on-off phases
    return info;
}
function ApagarPrender(encender) {
    console.log("apagar prender");
    if (encender) {
        console.log("prender");
        led.on();
    }
    else {
        console.log("apagar");
        led.off();
    }
}
console.log("Corriendo en l puerto: " + puerto);
//var j5 = require("johnny-five");
//var board = new j5.Board();
 
var LEDPIN = 13;
var OUTPUT = 1;
 
board.on("ready", function(){
  var val = 0;
 console.log("hola");
  // Set pin 13 to OUTPUT mode
  this.pinMode(LEDPIN, OUTPUT);
 
  // Create a loop to "flash/blink/strobe" an led
  this.loop( 100, function() {
    this.digitalWrite(LEDPIN, (val = val ? 0 : 1));
  });
});
var five = require("johnny-five"),
        board, led;

board = new five.Board();

board.on("ready", function() {

    // Create a standard `led` on pin 13
    led = new five.Led(13);

    // "strobe" the led in 100ms on-off phases
    led.strobe(100);
});
console.log("Esperando conectar...");
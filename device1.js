var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var sensor = new five.Sensor.Digital(8);

  sensor.on("change", function() {
    console.log(this.value);
  });
});

var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("COM4", {
  baudrate: 9600
});

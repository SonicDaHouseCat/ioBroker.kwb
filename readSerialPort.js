"use strict";

const SerialPort = require('serialport');
const Delimiter = require('@serialport/parser-delimiter');
const port = new SerialPort('/dev/ttyUSB0', { baudRate: 19200 }); //Todo: list field with available adapter in options
const parser = port.pipe(new Delimiter({ delimiter: [0x02, 0x02] }));

parser.on('data', console.log)
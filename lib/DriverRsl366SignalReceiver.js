'use strict';

const { RFDriver } = require('homey-rfdriver');
const Rsl366Signal = require('./Rsl366Signal');

module.exports = class DriverRsl366SignalReceiver extends RFDriver {

  static SIGNAL = Rsl366Signal;
  
}

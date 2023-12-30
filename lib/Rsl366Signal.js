'use strict';

const { RFSignal, RFError, RFUtil } = require('homey-rfdriver');

const codes = ["1000","0100","0010","0001"]
const commands = ["0001" /* OFF*/ ,"0000", /*ON*/]

// Protocol:
// rsl366 , 12 bits
// [0000] [0000] [000]     [0]
// house  unit   not used  command
// Bit position in house/unit determins value, it is not a binary representation of a number
// 1000 = 1, 0100 = 2, 0010 = 3, 0001 = 4
// Command 1 = turn off, 0 = turn on
// Ie: 
// 010000010001 = House Code 2, Unit Code 4, turn off.
module.exports = class KjellSignal extends RFSignal {

  static FREQUENCY = '433';
  static ID = 'rsl366-signal';

  static commandToPayload({ houseCode, unitCode, state }) {

    console.log("commandToPayload:command", houseCode, unitCode, state)
    
    let result=null;
    if( typeof houseCode !== 'number')
      throw new RFError('Invalid houseCode');
    
    if( typeof unitCode !== 'number' )
      throw new RFError('Invalid unitCode');
  
    if( typeof state !== 'boolean' )
      throw new RFError('Invalid State');
    
    result = [].concat(
      RFUtil.bitStringToBitArray(codes[houseCode-1]),
      RFUtil.bitStringToBitArray(codes[unitCode-1]),
      RFUtil.bitStringToBitArray(state ? commands[1] : commands[0])
    );
  
    console.log("commandToPayload:result", result);
    return result;
  }
}
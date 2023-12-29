'use strict';

const { RFSignal, RFError, RFUtil } = require('homey-rfdriver');

const houseCodes = ["1000","0100","0010","0001"]
const unitCodes = ["1000","0100","0010","0001"]
const commands = ["0001" /* OFF*/ ,"0000", /*ON*/]

// Protocol:
// [houseCode][unitCode][command] (12 bits)
module.exports = class KjellSignal extends RFSignal {

  static FREQUENCY = '433';
  static ID = 'rsl366-signal';

  static commandToPayload({ houseCode, unitCode, state }) {

    console.log("commandToPayload:command", houseCode, unitCode, state)
    
    let result=null;
    if( typeof houseCode !== 'number' )
      throw new RFError('Invalid houseCode');
    
    if( typeof unitCode !== 'number' )
      throw new RFError('Invalid unitCode');
  
    if( typeof state !== 'boolean' )
      throw new RFError('Invalid State');
    
    result = [].concat(
      RFUtil.bitStringToBitArray(houseCodes[houseCode-1]),
      RFUtil.bitStringToBitArray(unitCodes[unitCode-1]),
      RFUtil.bitStringToBitArray(state ? commands[1] : commands[0])
    );
  
    console.log("commandToPayload:result", result);
    return result;
  }

  // static payloadToCommand(payload) {

  //   console.log("payLoadToCommand:payload", payload)
  //   const houseCode = houseCodes.indexOf(Number(payload[0]))+1;
  //   let result = null;

  //   console.log("payLoadToCommand:result", result);
  //   return result;
  // }

  // static commandToDeviceData(command) {
  //   return {
  //     houseCode: command.houseCode,
  //     unitCode: command.unitCode
  //   };
  // }

  // static createPairCommand() {
  //   return {
  //     address: Math.round(Math.random() * 255),
  //     state: true,
  //   };
  // }

}
const { RFDevice } = require('homey-rfdriver');

module.exports = class DeviceRsl366SignalReceiver extends RFDevice {

  static RX_ENABLED = false; // Set to true for transmitter devices

  static CAPABILITIES = {
    onoff: ({ value, data}) => ({
      houseCode: data.houseCode,
      unitCode: data.unitCode,
      state: value === true,
    }),
  };

  async onAdded() {
    if (this.hasCapability('onoff')) {
      await this.setCapabilityValue('onoff', false);
    }
  }
}
# Rsl366

Support for older style switches like Rising Sun RSL366R, Conrad RSL366 and perhaps other units using the same protocol.

## What does this app do?

The Rsl366 app uses [`homey-rfdriver`](https://athombv.github.io/node-homey-rfdriver/) to communicate with Rsl devices using the 433 MHz transceiver on Homey. Devices are added using the standard Homey App (Add new device) and then manually configuring House Code (I-IV) and Unit Code (1-4).

## Sources of information

A huge thanks thanks to pilight where I found good information about the protocol https://manual.pilight.org/protocols/433.92/switch/rsl366.html, with that information it was easy to create a signal definition and driver for Homey.

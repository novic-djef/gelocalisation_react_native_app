const EventEmitter = require('events');
export default class Emitter extends EventEmitter {}
export const IlinkEmitter = new Emitter();
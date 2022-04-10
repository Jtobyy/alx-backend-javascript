export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
    globalThis.Number = (thisInstance) => (thisInstance._size);
    globalThis.String = (thisInstance) => (thisInstance._location);
  }
}

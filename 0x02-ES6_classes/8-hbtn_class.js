export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
    Number = (thisInstance) => (thisInstance._size);
    String = (thisInstance) => (thisInstance._location);
  }
}

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Spicie = this.constructor[Symbol.species];
    return new Spicie(this._brand, this._motor, this._color);
  }

  static get [Symbol.species]() {
    return this;
  }
}

export default class Building {
  constructor(sqft) {
      this._sqft = sqft;
      doSomething();
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

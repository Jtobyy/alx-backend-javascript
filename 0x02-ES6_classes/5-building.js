export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor.name !== 'Building') {
      this.evacuationWarningMessage();
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

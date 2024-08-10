export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (new.target !== Building && this.evacuationWarningMessage
      === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  evacuationWaringMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(x) {
    this._sqft = x;
  }
}

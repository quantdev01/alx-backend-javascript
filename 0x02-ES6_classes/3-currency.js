export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(x) {
    this._code = x;
  }

  get name() {
    return this._name;
  }

  set name(x) {
    this._name = x;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

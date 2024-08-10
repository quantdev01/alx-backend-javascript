export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  set code(x) {
    this._code = x;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}

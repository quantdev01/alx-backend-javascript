export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('TypeError: name must be a string');
    }
    this._name = name;

    if (typeof length !== 'number' || length < 0) {
      throw new TypeError('TypeError: Lenght must be a number');
    }
    this._length = length;

    if (typeof students !== 'object') {
      throw new TypeError('TypeError: students must be an array');
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(x) {
    if (typeof x !== 'string') {
      throw new TypeError('TypeError: Name must be a string');
    }
    this._name = x;
  }

  get length() {
    return this._length;
  }

  set length(x) {
    if (typeof x !== 'number' || x < 0) {
      throw new TypeError('TypeError: be a number');
    }
    this._length = x;
  }

  get students() {
    return this._students;
  }

  set students(x) {
    if (typeof x !== 'object') {
      throw new TypeError('Must be an array object');
    }
    this._students = x;
  }
}

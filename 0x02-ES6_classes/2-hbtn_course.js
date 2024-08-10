export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string'){
      this._name = name;
    }
    if (typeof length === 'number') {
      this._length = length;
    }
    if (typeof students === 'object') {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(x) {
    if (typeof x === 'string') {
      this._name = x;
    } else {
      console.log('TypeError: Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(x) {
    if (typeof x === 'number') {
      this._length = x;
    } else {
      console.log('Must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(x) {
    if (typeof x === 'object') {
      this._students = x;
    } else {
      console.log('Must be an array object');
    }
  }
}

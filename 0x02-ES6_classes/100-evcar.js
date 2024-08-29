import Car from './10-car';

const evCloneSymbol = Symbol('cloneCar');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  [evCloneSymbol]() {
    return new Car(this._brand, this._motor, this._color);
  }

  cloneCar() {
    return this[evCloneSymbol]();
  }

  get range() {
    return this._range;
  }
}

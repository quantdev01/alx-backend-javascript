import createIteratorObject from "./100-createIteratorObject.js";

import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};
console.log('----------------')

const report = createReportObject(employees);
console.log('----------------')

const reportWithIterator = createIteratorObject(report);
console.log('----------------')

for (const item of reportWithIterator) {
    console.log(item);
}
console.log('----------------')


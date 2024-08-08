export default function createIteratorObject(report) {
  let allEmployees = [];

  // Get the allEmployees object from the report
  for (const department of Object.keys(report.allEmployees)) {
    allEmployees = allEmployees.concat(report.allEmployees[department]);
  }

  // Return an iterator
  return allEmployees[Symbol.iterator]();
}

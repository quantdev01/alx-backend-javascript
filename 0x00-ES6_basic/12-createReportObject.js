export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(all) {
      let totalEmployee = 0;
      for (const i in all) {
        if (i) totalEmployee += 1;
      }
      return totalEmployee;
    },
  };
}

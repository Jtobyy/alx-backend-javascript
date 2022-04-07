export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments: (employeesList) => ((Object.keys(employeesList)).length),
  };
  return obj;
}

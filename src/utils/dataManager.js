async function getEmployeesList() {
  const response = await fetch('/employees');
  const employees = await response.json();
  return employees;
}

// Post a new employee to the express server with 'Access-Control-Allow-Origin' set to '*'
async function postEmployee(employee) {
  const response = await fetch('/employees', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(employee),
  });
  const newEmployee = await response.json();
  return newEmployee;
}

export { getEmployeesList, postEmployee };

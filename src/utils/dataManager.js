/**
 * It fetches the employees list from the server and returns it
 * @param {array} employees - The employees array that we're going to be updating.
 * @returns {Promise} The employees list
 */
async function getEmployeesList(employees) {
  try {
    const response = await fetch('https://server-p14.vercel.app/employees', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
    return employees;
  }
}

/**
 * It sends a POST request to the server with the employee object as the body of the request
 * @param {object} employee - This is the employee object that we want to post to the server.
 * @return {Promise} The new employee object.
 */
async function postEmployee(employee, employees) {
  try {
    const response = await fetch('https://server-p14.vercel.app/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    });
    return response.json();
  } catch (error) {
    console.log(error);
    return employees.push(employee);
  }
}

/**
 * It takes an id and an array of employees as arguments, and returns the deleted employee
 * @param {number} id - The id of the employee to be deleted.
 * @param {array} employees - the array of employees
 * @returns {Promise} - The employee that was deleted.
 */
async function deleteEmployee(id, employees) {
  try {
    const response = await fetch('https://server-p14.vercel.app/employees', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    return response.json();
  } catch (error) {
    const employeeDeleted = employees.find((employee) => employee.id === id);
    return employees.splice(employees.indexOf(employeeDeleted), 1);
  }
}

export { getEmployeesList, postEmployee, deleteEmployee };

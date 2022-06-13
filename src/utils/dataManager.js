async function getEmployeesList() {
  const response = await fetch('http://localhost:5000/employees', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
}

/**
 * It sends a POST request to the server with the employee object as the body of the request
 * @param {object} employee - This is the employee object that we want to post to the server.
 * @return {Promise} The new employee object.
 */
async function postEmployee(employee) {
  const response = await fetch('http://localhost:5000/employees', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employee),
  });
  return response.json();
}

export { getEmployeesList, postEmployee };

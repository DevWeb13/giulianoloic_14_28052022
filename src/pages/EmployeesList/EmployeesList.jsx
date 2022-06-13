import React from 'react';
import propTypes, { oneOfType } from 'prop-types';
import EmployeesTable from '../../components/EmployeesTable/EmployeesTable';
import Header from '../../components/Header/Header';
import DeleteEmployee from '../../components/DeleteEmployee/DeleteEmployee';

/**
 * @param {object} props
 * @param {array} props.employees - list of employees
 * @param {object} props.setEmployees - function to set employees
 * @return {import('react').ReactComponentElement} - React Home component element
 */
function EmployeesList({ employees, setEmployees }) {
  return (
    <div className="container">
      <Header title="Current Employees" />

      <EmployeesTable employees={employees} />

      {employees.length > 0 && (
        <DeleteEmployee employees={employees} setEmployees={setEmployees} />
      )}
    </div>
  );
}

EmployeesList.propTypes = {
  employees: propTypes.arrayOf(
    propTypes.objectOf(oneOfType([propTypes.string, propTypes.number])),
  ).isRequired,
  setEmployees: propTypes.func.isRequired,
};

export default EmployeesList;

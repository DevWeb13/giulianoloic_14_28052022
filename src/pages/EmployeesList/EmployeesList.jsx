import React from 'react';
import propTypes, { oneOfType } from 'prop-types';
import EmployeesTable from '../../components/EmployeesTable/EmployeesTable';
import Header from '../../components/Header/Header';

function EmployeesList({ employees }) {
  return (
    <div className="container">
      <Header title="Current Employees" />

      <EmployeesTable employees={employees} />
    </div>
  );
}

EmployeesList.propTypes = {
  employees: propTypes.arrayOf(
    propTypes.objectOf(oneOfType([propTypes.string, propTypes.number])),
  ).isRequired,
};

export default EmployeesList;

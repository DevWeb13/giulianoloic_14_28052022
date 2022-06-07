import React from 'react';
import propTypes from 'prop-types';
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
  employees: propTypes.arrayOf(propTypes.objectOf(propTypes.string)).isRequired,
};

export default EmployeesList;

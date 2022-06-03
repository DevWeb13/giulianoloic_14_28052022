import React from 'react';
import EmployeesTable from '../../components/EmployeesTable/EmployeesTable';
import Header from '../../components/Header/Header';

function EmployeesList() {
  return (
    <div className="container">
      <Header title="Current Employees" />

      <EmployeesTable />
    </div>
  );
}

export default EmployeesList;

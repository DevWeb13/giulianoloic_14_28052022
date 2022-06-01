import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
// import EmployeesTable from '../../components/EmployeesTable/EmployeesTable';

function EmployeesList() {
  return (
    <div className="container">
      <Header title="Current Employees" />
      <Link to="/">Home</Link>
      {/* <EmployeesTable /> */}
    </div>
  );
}

export default EmployeesList;

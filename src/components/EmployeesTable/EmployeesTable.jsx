import React from 'react';
import { DataTableReact } from 'devweb13-libraries-react';
import propTypes from 'prop-types';

function EmployeesTable({ employees }) {
  return (
    <div>
      <DataTableReact employees={employees} />
    </div>
  );
}

EmployeesTable.propTypes = {
  employees: propTypes.arrayOf(propTypes.objectOf(propTypes.string)).isRequired,
};

export default EmployeesTable;

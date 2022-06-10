import React from 'react';
import { DataTableReact } from 'devweb13-libraries-react';
import propTypes, { oneOfType } from 'prop-types';

function EmployeesTable({ employees }) {
  console.log(employees);
  return (
    <div>
      <DataTableReact employees={employees} />
    </div>
  );
}

EmployeesTable.propTypes = {
  employees: propTypes.arrayOf(
    propTypes.objectOf(oneOfType([propTypes.string, propTypes.number])),
  ).isRequired,
};

export default EmployeesTable;

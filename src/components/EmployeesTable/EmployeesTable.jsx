import React from 'react';
import { DataTableReact } from 'devweb13-libraries-react';
import propTypes, { oneOfType } from 'prop-types';

/**
 * @param {object} props
 * @param {array} props.employees - list of employees
 * @return {React.ReactElement} - React EmployeesTable component element
 */
function EmployeesTable({ employees }) {
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

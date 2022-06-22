import React from 'react';
import propTypes, { oneOfType } from 'prop-types';
// import EmployeesTable from '../../components/EmployeesTable/EmployeesTable';
import { DataTableReact } from 'devweb13-libraries-react';
import Header from '../../components/Header/Header';
import DeleteEmployee from '../../components/DeleteEmployee/DeleteEmployee';
import Loader from '../../components/Loader/Loader';

/**
 * @param {object} props
 * @param {array} props.employees - list of employees
 * @param {object} props.setEmployees - function to set employees
 * @param {object} props.loader - state of loader
 * @param {object} props.setLoader - function to set loader
 * @return {React.ReactElement} - React Home component element
 */
function EmployeesList({ employees, setEmployees, loader, setLoader }) {
  function showDelete() {
    if (employees.length > 0) {
      return (
        <DeleteEmployee
          employees={employees}
          setEmployees={setEmployees}
          setLoader={setLoader}
        />
      );
    }
    return null;
  }
  return (
    <div className="container">
      <Header title="Current Employees" />

      {loader ? (
        <Loader />
      ) : (
        <>
          <DataTableReact employees={employees} />

          {showDelete()}
        </>
      )}
    </div>
  );
}

EmployeesList.propTypes = {
  employees: propTypes.arrayOf(
    propTypes.objectOf(oneOfType([propTypes.string, propTypes.number])),
  ).isRequired,
  setEmployees: propTypes.func.isRequired,
  loader: propTypes.bool.isRequired,
  setLoader: propTypes.func.isRequired,
};

export default EmployeesList;

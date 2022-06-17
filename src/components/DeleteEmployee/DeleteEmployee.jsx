import React, { useState } from 'react';
import propTypes, { oneOfType } from 'prop-types';
import { deleteEmployee, getEmployeesList } from '../../utils/dataManager';

/**
 * @param {object} props
 * @param {array} props.employees - list of employees
 * @param {object} props.setEmployees - function to set employees
 * @param {object} props.setLoader - function to set loader
 * @return {React.ReactElement} - React Home component element
 */
function DeleteEmployee({ employees, setEmployees, setLoader }) {
  const [deleleFormIsOpen, setDeleteFormIsIsOpen] = useState(false);
  const [employeeId, setEmployeeId] = useState(0);
  const [employeeNotFound, setEmployeeNotFound] = useState(false);
  return (
    <div className="deleteEmployee">
      <button
        type="button"
        className="button"
        onClick={() => {
          setDeleteFormIsIsOpen(!deleleFormIsOpen);
          setEmployeeNotFound(false);
        }}
      >
        {deleleFormIsOpen ? 'Close' : 'Delete employee'}
      </button>
      {deleleFormIsOpen && (
        <form
          className="deleteForm"
          onSubmit={(e) => {
            e.preventDefault();
            employees.forEach((employee) => {
              if (employee.id === employeeId) {
                if (
                  // eslint-disable-next-line no-alert
                  window.confirm(
                    `Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`,
                  )
                ) {
                  setLoader(true);
                  deleteEmployee(employeeId, employees).then(() => {
                    getEmployeesList(employees).then((newList) => {
                      setEmployees(newList);
                      setEmployeeId(0);
                      setDeleteFormIsIsOpen(false);
                      setEmployeeNotFound(false);
                      setLoader(false);
                    });
                  });
                }
              } else {
                setEmployeeId(0);
                setEmployeeNotFound(true);
              }
            });
          }}
        >
          <label htmlFor="employeeId">Employee id</label>
          <input
            type="number"
            id="employeeId"
            onChange={(e) => {
              if (employeeNotFound) {
                setEmployeeNotFound(false);
              }
              setEmployeeId(parseInt(e.target.value, 10));
            }}
            value={employeeId || ''}
            required
          />
          <button type="submit" className="button delete">
            Delete
          </button>
          {employeeNotFound && <p className="error">Employee not found</p>}
        </form>
      )}
    </div>
  );
}

DeleteEmployee.propTypes = {
  employees: propTypes.arrayOf(
    propTypes.objectOf(oneOfType([propTypes.string, propTypes.number])),
  ).isRequired,
  setEmployees: propTypes.func.isRequired,
  setLoader: propTypes.func.isRequired,
};

export default DeleteEmployee;

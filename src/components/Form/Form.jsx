import React, { useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import propTypes, { oneOfType } from 'prop-types';
import states from '../../data/states.json';
import department from '../../data/department.json';

function Form({ employees, setEmployees, setIsOpen }) {
  const [employee, setEmployee] = useState({
    id: employees.length + 1,
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    startDate: null,
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: 'Sales',
  });

  function formatDates(date) {
    return date.toISOString().substring(0, 10);
  }

  useEffect(() => {
    setEmployee({
      id: employees.length + 1,
      firstName: '',
      lastName: '',
      dateOfBirth: null,
      startDate: null,
      street: '',
      city: '',
      state: '',
      zipCode: '',
      department: 'Sales',
    });
  }, [employees]);

  return (
    <form
      className="formGroup"
      id="form"
      onSubmit={(e) => {
        e.preventDefault();
        const formatDateOfBirth = formatDates(employee.dateOfBirth);
        const formatStartDate = formatDates(employee.startDate);
        const newEmployee = {
          ...employee,
          dateOfBirth: formatDateOfBirth,
          startDate: formatStartDate,
        };
        setEmployees([...employees, newEmployee]);
        setIsOpen(true);
      }}
    >
      <label className="label" htmlFor="firstName">
        First Name
      </label>
      <input
        type="text"
        className="formControl"
        id="firstName"
        onChange={(e) =>
          setEmployee({ ...employee, firstName: e.target.value })
        }
        required
        minLength={2}
        maxLength={20}
        value={employee.firstName}
      />

      <label className="label" htmlFor="lastName">
        Last Name
      </label>
      <input
        type="text"
        className="formControl"
        id="lastName"
        onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
        required
        minLength={2}
        maxLength={20}
        value={employee.lastName}
      />

      <label className="label" htmlFor="dateOfBirth">
        Date of Birth
      </label>
      <DatePicker
        name="dateOfBirth"
        defaultValue={new Date()}
        maxDate={
          new Date(new Date().setFullYear(new Date().getFullYear() - 18))
        }
        className="datePicker"
        onChange={(newDate) =>
          setEmployee({
            ...employee,
            dateOfBirth: newDate,
          })
        }
        value={employee.dateOfBirth}
        required
      />

      <label className="label" htmlFor="startDate">
        Start Date
      </label>

      <DatePicker
        name="startDate"
        maxDate={new Date()}
        className="datePicker"
        onChange={(startDateValue) =>
          setEmployee({
            ...employee,
            startDate: startDateValue,
          })
        }
        value={employee.startDate}
        required
      />

      <fieldset className="address">
        <legend>Address</legend>

        <label className="label" htmlFor="street">
          Street
        </label>
        <input
          type="text"
          className="formControl"
          id="street"
          onChange={(e) => setEmployee({ ...employee, street: e.target.value })}
          required
          minLength={2}
          maxLength={20}
          value={employee.street}
        />

        <label className="label" htmlFor="city">
          City
        </label>
        <input
          type="text"
          className="formControl"
          id="city"
          onChange={(e) => setEmployee({ ...employee, city: e.target.value })}
          required
          minLength={2}
          maxLength={20}
          value={employee.city}
        />

        <label className="label" htmlFor="state">
          State
        </label>

        <Select
          name="state"
          inputId="state"
          options={states.states}
          className="select"
          onChange={(e) => {
            if (e === null) {
              setEmployee({ ...employee, state: '' });
              return;
            }
            setEmployee({ ...employee, state: e.label });
          }}
          form="form"
          menuPlacement="auto"
          isClearable
          value={{ label: employee.state, value: employee.state }}
        />
        <input
          type="text"
          className="inputStateHidden"
          id="state"
          value={employee.state}
          onChange={() => employee.state}
          required
        />

        <label className="label" htmlFor="zipCode">
          Zip Code
        </label>
        <input
          id="zipCode"
          name="zipCode"
          type="number"
          min={10000}
          max={99999}
          className="formControl"
          onChange={(e) =>
            setEmployee({ ...employee, zipCode: e.target.value })
          }
          required
          value={employee.zipCode}
        />
      </fieldset>

      <label className="label" htmlFor="department">
        Department
      </label>
      <Select
        name="department"
        inputId="department"
        options={department.department}
        className="select"
        defaultValue={department.department[0]}
        onChange={(e) => {
          if (e === null) {
            setEmployee({ ...employee, department: '' });
            return;
          }
          setEmployee({ ...employee, department: e.value });
        }}
        form="form"
        menuPlacement="auto"
        value={{ label: employee.department, value: employee.department }}
      />

      <button type="submit" name="submit" id="submit" className="saveButton">
        Save
      </button>
    </form>
  );
}

Form.propTypes = {
  employees: propTypes.arrayOf(
    propTypes.objectOf(oneOfType([propTypes.string, propTypes.number])),
  ).isRequired,
  setEmployees: propTypes.func.isRequired,
  setIsOpen: propTypes.func.isRequired,
};

export default Form;

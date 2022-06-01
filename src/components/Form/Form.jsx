import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import states from '../../data/states';

function Form() {
  const dateNow = new Date();

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    startDate: null,
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: 'sales',
  });

  const department = [
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'humanResources', label: 'Human Resources' },
    { value: 'legal', label: 'Legal' },
  ];

  return (
    <form className="formGroup">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        className="formControl"
        id="firstName"
        onChange={(e) =>
          setEmployee({ ...employee, firstName: e.target.value })
        }
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        className="formControl"
        id="lastName"
        onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
      />

      <label htmlFor="dateOfBirth">Date of Birth</label>
      <DatePicker
        maxDate={dateNow}
        className="datePicker"
        onChange={(newDate) =>
          setEmployee({
            ...employee,
            dateOfBirth: newDate,
          })
        }
        value={employee.dateOfBirth}
      />

      <label htmlFor="startDate">Start Date</label>

      <DatePicker
        name="startDate"
        maxDate={dateNow}
        className="datePicker"
        onChange={(startDateValue) =>
          setEmployee({
            ...employee,
            startDate: startDateValue,
          })
        }
        value={employee.startDate}
      />

      <label htmlFor="street">Street</label>
      <input
        type="text"
        className="formControl"
        id="street"
        onChange={(e) => setEmployee({ ...employee, street: e.target.value })}
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        className="formControl"
        id="city"
        onChange={(e) => setEmployee({ ...employee, city: e.target.value })}
      />

      <label htmlFor="state">State</label>
      <Select
        inputId="state"
        options={states}
        className="select"
        onChange={(e) => setEmployee({ ...employee, state: e.label })}
      />

      <label htmlFor="zipCode">Zip Code</label>
      <input
        type="text"
        className="formControl"
        id="zipCode"
        onChange={(e) => setEmployee({ ...employee, zipCode: e.target.value })}
      />

      <label htmlFor="department">Department</label>
      <Select
        inputId="department"
        options={department}
        className="select"
        defaultValue={department[0]}
        onChange={(e) => setEmployee({ ...employee, department: e.value })}
      />

      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

export default Form;

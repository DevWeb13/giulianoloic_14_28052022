import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import states from '../../data/states';

function Form() {
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

  function checkAndSaveData(data) {
    console.log('Saved Employee');
  }

  return (
    <form
      className="formGroup"
      id="form"
      onSubmit={(e) => {
        console.log(e);
        e.preventDefault();
        checkAndSaveData(employee);
      }}
    >
      <label htmlFor="firstName">First Name</label>
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
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        className="formControl"
        id="lastName"
        onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
        required
        minLength={2}
        maxLength={20}
      />

      <label htmlFor="dateOfBirth">Date of Birth</label>
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

      <label htmlFor="startDate">Start Date</label>

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

        <label htmlFor="street">Street</label>
        <input
          type="text"
          className="formControl"
          id="street"
          onChange={(e) => setEmployee({ ...employee, street: e.target.value })}
          required
          minLength={2}
          maxLength={20}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          className="formControl"
          id="city"
          onChange={(e) => setEmployee({ ...employee, city: e.target.value })}
          required
          minLength={2}
          maxLength={20}
        />

        <label htmlFor="state">State</label>

        <Select
          name="state"
          inputId="state"
          options={states}
          className="select"
          onChange={(e) => setEmployee({ ...employee, state: e.label })}
          form="form"
          menuPlacement="auto"
        />
        <input
          type="text"
          className="inputStateHidden"
          id="state"
          value={employee.state}
          onChange={() => employee.state}
          required
        />

        <label htmlFor="zipCode">Zip Code</label>
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
        />
      </fieldset>

      <label htmlFor="department">Department</label>
      <Select
        name="department"
        inputId="department"
        options={department}
        className="select"
        defaultValue={department[0]}
        onChange={(e) => setEmployee({ ...employee, department: e.value })}
        menuPlacement="auto"
      />

      <button type="submit" name="submit" id="submit" className="saveButton">
        Save
      </button>
    </form>
  );
}

export default Form;

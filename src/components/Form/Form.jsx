import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import Select from 'react-select';

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

  const states = [
    {
      label: 'Alabama',
      value: 'AL',
    },
    {
      label: 'Alaska',
      value: 'AK',
    },
    {
      label: 'American Samoa',
      value: 'AS',
    },
    {
      label: 'Arizona',
      value: 'AZ',
    },
    {
      label: 'Arkansas',
      value: 'AR',
    },
    {
      label: 'California',
      value: 'CA',
    },
    {
      label: 'Colorado',
      value: 'CO',
    },
    {
      label: 'Connecticut',
      value: 'CT',
    },
    {
      label: 'Delaware',
      value: 'DE',
    },
    {
      label: 'District Of Columbia',
      value: 'DC',
    },
    {
      label: 'Federated States Of Micronesia',
      value: 'FM',
    },
    {
      label: 'Florida',
      value: 'FL',
    },
    {
      label: 'Georgia',
      value: 'GA',
    },
    {
      label: 'Guam',
      value: 'GU',
    },
    {
      label: 'Hawaii',
      value: 'HI',
    },
    {
      label: 'Idaho',
      value: 'ID',
    },
    {
      label: 'Illinois',
      value: 'IL',
    },
    {
      label: 'Indiana',
      value: 'IN',
    },
    {
      label: 'Iowa',
      value: 'IA',
    },
    {
      label: 'Kansas',
      value: 'KS',
    },
    {
      label: 'Kentucky',
      value: 'KY',
    },
    {
      label: 'Louisiana',
      value: 'LA',
    },
    {
      label: 'Maine',
      value: 'ME',
    },
    {
      label: 'Marshall Islands',
      value: 'MH',
    },
    {
      label: 'Maryland',
      value: 'MD',
    },
    {
      label: 'Massachusetts',
      value: 'MA',
    },
    {
      label: 'Michigan',
      value: 'MI',
    },
    {
      label: 'Minnesota',
      value: 'MN',
    },
    {
      label: 'Mississippi',
      value: 'MS',
    },
    {
      label: 'Missouri',
      value: 'MO',
    },
    {
      label: 'Montana',
      value: 'MT',
    },
    {
      label: 'Nebraska',
      value: 'NE',
    },
    {
      label: 'Nevada',
      value: 'NV',
    },
    {
      label: 'New Hampshire',
      value: 'NH',
    },
    {
      label: 'New Jersey',
      value: 'NJ',
    },
    {
      label: 'New Mexico',
      value: 'NM',
    },
    {
      label: 'New York',
      value: 'NY',
    },
    {
      label: 'North Carolina',
      value: 'NC',
    },
    {
      label: 'North Dakota',
      value: 'ND',
    },
    {
      label: 'Northern Mariana Islands',
      value: 'MP',
    },
    {
      label: 'Ohio',
      value: 'OH',
    },
    {
      label: 'Oklahoma',
      value: 'OK',
    },
    {
      label: 'Oregon',
      value: 'OR',
    },
    {
      label: 'Palau',
      value: 'PW',
    },
    {
      label: 'Pennsylvania',
      value: 'PA',
    },
    {
      label: 'Puerto Rico',
      value: 'PR',
    },
    {
      label: 'Rhode Island',
      value: 'RI',
    },
    {
      label: 'South Carolina',
      value: 'SC',
    },
    {
      label: 'South Dakota',
      value: 'SD',
    },
    {
      label: 'Tennessee',
      value: 'TN',
    },
    {
      label: 'Texas',
      value: 'TX',
    },
    {
      label: 'Utah',
      value: 'UT',
    },
    {
      label: 'Vermont',
      value: 'VT',
    },
    {
      label: 'Virgin Islands',
      value: 'VI',
    },
    {
      label: 'Virginia',
      value: 'VA',
    },
    {
      label: 'Washington',
      value: 'WA',
    },
    {
      label: 'West Virginia',
      value: 'WV',
    },
    {
      label: 'Wisconsin',
      value: 'WI',
    },
    {
      label: 'Wyoming',
      value: 'WY',
    },
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

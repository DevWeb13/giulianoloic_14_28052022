import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

function SignUp() {
  return (
    <div className="container">
      <Header title="HRnet" />
      <Link to="/employees-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <form className="formGroup">
        <label htmlFor="firstName">First Name</label>
        <input type="text" className="formControl" id="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" className="formControl" id="lastName" />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input type="date" className="formControl" id="dateOfBirth" />

        <label htmlFor="startDate">Start Date</label>
        <input type="date" className="formControl" id="startDate" />

        <label htmlFor="street">Street</label>
        <input type="text" className="formControl" id="street" />

        <label htmlFor="city">City</label>
        <input type="text" className="formControl" id="city" />

        <label htmlFor="state">State</label>
        <input type="text" className="formControl" id="state" />

        <label htmlFor="zipCode">Zip Code</label>
        <input type="text" className="formControl" id="zipCode" />

        <label htmlFor="Department">Department</label>
        <select className="formControl" id="Department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default SignUp;

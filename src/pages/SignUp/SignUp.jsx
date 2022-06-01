import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';

function SignUp() {
  return (
    <div className="container">
      <Header title="HRnet" />
      <Link to="/employees-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <Form />
    </div>
  );
}

export default SignUp;

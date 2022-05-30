import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

function SignUp() {
  return (
    <div className="container">
      <Header title="HRnet" />
      <Link to="/employees-list">View Current Employees</Link>
    </div>
  );
}

export default SignUp;

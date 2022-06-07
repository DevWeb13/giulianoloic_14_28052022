import React from 'react';
import propTypes from 'prop-types';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';

function Home({ employees, setEmployees }) {
  return (
    <div className="container">
      <Header title="HRnet" />

      <h2>Create Employee</h2>
      <Form employees={employees} setEmployees={setEmployees} />
    </div>
  );
}

Home.propTypes = {
  employees: propTypes.arrayOf(propTypes.objectOf(propTypes.string)).isRequired,
  setEmployees: propTypes.func.isRequired,
};

export default Home;

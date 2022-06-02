import React from 'react';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';

function Home() {
  return (
    <div className="container">
      <Header title="HRnet" />

      <h2>Create Employee</h2>
      <Form />
    </div>
  );
}

export default Home;

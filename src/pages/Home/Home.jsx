import React, { useState } from 'react';
import propTypes, { oneOfType } from 'prop-types';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import ModalComp from '../../components/ModalComp/ModalComp';

/**
 * @param {object} props
 * @param {array} props.employees - list of employees
 * @param {object} props.setEmployees - function to set employees
 * @return {React.ReactElement} - React Home component element
 */
function Home({ employees, setEmployees }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <Header title="HRnet" />
      <h2>Create Employee</h2>
      <Form
        employees={employees}
        setEmployees={setEmployees}
        setIsOpen={setIsOpen}
      />
      <ModalComp modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

Home.propTypes = {
  employees: propTypes.arrayOf(
    propTypes.objectOf(oneOfType([propTypes.string, propTypes.number])),
  ).isRequired,
  setEmployees: propTypes.func.isRequired,
};

export default Home;

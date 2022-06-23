import React, { useState } from 'react';
import propTypes, { oneOfType } from 'prop-types';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import Loader from '../../components/Loader/Loader';
import ModalComp from '../../components/ModalComp/ModalComp';

/**
 * @param {object} props
 * @param {array} props.employees - list of employees
 * @param {object} props.setEmployees - function to set employees
 * @param {object} props.loader - state of loader
 * @param {object} props.setLoader - function to set loader
 * @return {React.ReactElement} - React Home component element
 */
function Home({ employees, setEmployees, loader, setLoader }) {
  const [modalIsOpen, setIsOpen] = useState(true);
  return (
    <div className="container">
      <Header title="HRnet" />
      {loader ? (
        <Loader />
      ) : (
        <>
          <h2>Create Employee</h2>
          <Form
            employees={employees}
            setEmployees={setEmployees}
            setIsOpen={setIsOpen}
            setLoader={setLoader}
          />
        </>
      )}
      <ModalComp modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

Home.propTypes = {
  employees: propTypes.arrayOf(
    propTypes.objectOf(oneOfType([propTypes.string, propTypes.number])),
  ).isRequired,
  setEmployees: propTypes.func.isRequired,
  loader: propTypes.bool.isRequired,
  setLoader: propTypes.func.isRequired,
};

export default Home;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ title }) {
  const getUrl = () => {
    const url = window.location.pathname;
    const path = url.split('/');
    return path[path.length - 1];
  };

  return getUrl() === '' ? (
    <header>
      <h1>{title}</h1>
      <Link className="linkToEmployeesList" to="/employees-list">
        View Current Employees
      </Link>
    </header>
  ) : (
    <header className="employeesHeader">
      <h1 className="employeesTitle">{title}</h1>
      <Link className="linkToHome" to="/">
        Home
      </Link>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

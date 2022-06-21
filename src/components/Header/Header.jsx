import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faTableList } from '@fortawesome/free-solid-svg-icons';

/**
 * @param {object} props
 * @param {string} props.title - title of the header
 * @returns {React.ReactElement} - React Header component element
 */
function Header({ title }) {
  return title === 'HRnet' ? (
    <header>
      <h1>{title}</h1>
      <Link className="linkToEmployeesList" to="/employees-list">
        View Current Employees
        <FontAwesomeIcon className="iconHeader" icon={faTableList} />
      </Link>
    </header>
  ) : (
    <header className="employeesHeader">
      <h1 className="employeesTitle">{title}</h1>
      <Link className="linkToHome" to="/">
        <FontAwesomeIcon className="iconHeader" icon={faHouse} />
        Home
      </Link>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

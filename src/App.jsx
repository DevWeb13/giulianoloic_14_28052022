import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import EmployeesList from './pages/EmployeesList/EmployeesList';
import { getEmployeesList } from './utils/dataManager';

// import data from './data/employees.json';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployeesList().then((data) => {
      console.log(data);

      setEmployees(data);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home employees={employees} setEmployees={setEmployees} />}
        />
        <Route
          path="/employees-list"
          element={<EmployeesList employees={employees} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import EmployeesList from './pages/EmployeesList/EmployeesList';

function App() {
  const [employees, setEmployees] = useState([]);
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

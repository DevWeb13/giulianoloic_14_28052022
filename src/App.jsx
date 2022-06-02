import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import EmployeesList from './pages/EmployeesList/EmployeesList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees-list" element={<EmployeesList />} />
      </Routes>
    </Router>
  );
}

export default App;

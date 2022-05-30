import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import EmployeesList from './pages/EmployeesList/EmployeesList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/employees-list" element={<EmployeesList />} />
      </Routes>
    </Router>
  );
}

export default App;

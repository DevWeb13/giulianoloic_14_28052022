import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import EmployeesList from './pages/EmployeesList/EmployeesList';
import { getEmployeesList } from './utils/dataManager';

function App() {
  const [employees, setEmployees] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    getEmployeesList().then((data) => {
      setEmployees(data);
      setLoader(false);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              employees={employees}
              setEmployees={setEmployees}
              loader={loader}
              setLoader={setLoader}
            />
          }
        />
        <Route
          path="/employees-list"
          element={
            <EmployeesList
              employees={employees}
              setEmployees={setEmployees}
              loader={loader}
              setLoader={setLoader}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

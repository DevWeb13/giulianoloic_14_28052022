import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import EmployeesList from './EmployeesList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<EmployeesList />} />
      </Routes>
    </Router>
  );
}

export default App;

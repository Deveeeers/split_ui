import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserManagement from './pages/UserManagement';
import GroupManagement from './pages/GroupManagement';
import ExpenseManagement from './pages/ExpenseManagement';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/groups" element={<GroupManagement />} />
        <Route path="/expenses" element={<ExpenseManagement />} />
      </Routes>
    </Router>
  );
};

export default App;

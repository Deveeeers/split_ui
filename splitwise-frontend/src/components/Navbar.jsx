import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-10 justify-center items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/groups">Groups</Link></li>
        <li><Link to="/expenses">Expenses</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

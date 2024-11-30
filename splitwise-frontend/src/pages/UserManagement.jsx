import React, { useState, useEffect } from 'react';
import { api } from '../api/api';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', address: '', contact_number: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await api.getAllUsers();
    setUsers(response.data);
  };

  const handleCreateUser = async () => {
    await api.createUser(newUser);
    fetchUsers();
    setNewUser({ name: '', email: '', address: '', contact_number: '' });
  };

  return (
    <div>
      <h2>User Management</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={handleCreateUser}>Add User</button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;

import React, { useState, useEffect } from 'react';
import { api } from '../api/api';

const GroupManagement = () => {
  const [groups, setGroups] = useState([]);
  const [newGroup, setNewGroup] = useState({ group_name: '', user_ids: [] });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchGroups();
    fetchUsers();
  }, []);

  const fetchGroups = async () => {
    const response = await api.getGroups();
    setGroups(response.data);
  };

  const fetchUsers = async () => {
    const response = await api.getAllUsers();
    setUsers(response.data);
  };

  const handleCreateGroup = async () => {
    await api.createGroup(newGroup);
    fetchGroups();
    setNewGroup({ group_name: '', user_ids: [] });
  };

  return (
    <div>
      <h2>Group Management</h2>
      <div>
        <input
          type="text"
          placeholder="Group Name"
          value={newGroup.group_name}
          onChange={(e) => setNewGroup({ ...newGroup, group_name: e.target.value })}
        />
        <select
          multiple
          value={newGroup.user_ids}
          onChange={(e) => setNewGroup({ ...newGroup, user_ids: [...e.target.selectedOptions].map(o => o.value) })}
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
        <button onClick={handleCreateGroup}>Create Group</button>
      </div>
      <ul>
        {groups.map((group) => (
          <li key={group.group_id}>{group.group_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupManagement;

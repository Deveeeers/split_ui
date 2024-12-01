import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups, createGroup } from '../slices/groupSlice'; // Update path as needed

const GroupManagement = () => {
  const [newGroup, setNewGroup] = useState({ group_name: '', user_ids: [] });
  const dispatch = useDispatch();

  const { groups, status, error } = useSelector((state) => state.groups);
  // const users = []; // Replace with actual users if fetched elsewhere

  // // Fetch groups on mount
  // useEffect(() => {
  //   dispatch(fetchGroups());
  // }, [dispatch]);

  // const handleCreateGroup = async () => {
  //   await dispatch(createGroup(newGroup)).unwrap(); // Ensure successful dispatch
  //   setNewGroup({ group_name: '', user_ids: [] });
  // };

  return (
    <div>
      <h2>Group Management</h2>
      {/* {status === 'loading' && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <input
          type="text"
          placeholder="Group Name"
          value={newGroup.group_name}
          onChange={(e) =>
            setNewGroup({ ...newGroup, group_name: e.target.value })
          }
        />
        <select
          multiple
          value={newGroup.user_ids}
          onChange={(e) =>
            setNewGroup({
              ...newGroup,
              user_ids: [...e.target.selectedOptions].map((o) => o.value),
            })
          }
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button onClick={handleCreateGroup}>Create Group</button>
      </div>

      <ul>
        {groups.map((group) => (
          <li key={group.group_id}>{group.group_name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default GroupManagement;

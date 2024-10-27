// src/UserList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]); // To store fetched users
  const [newUser, setNewUser] = useState(''); // To store new user input

  // Fetch users from JSON Server on component mount
  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data);  // Update the state with fetched data
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  // Add a new user to the JSON Server
  const addUser = () => {
    axios.post('http://localhost:3000/users', { name: newUser })
      .then(response => {
        setUsers([...users, response.data]);  // Append new user to the list
        setNewUser('');  // Clear the input field
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newUser}
        onChange={e => setNewUser(e.target.value)}
        placeholder="Enter new user name"
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default UserList;

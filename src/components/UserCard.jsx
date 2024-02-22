/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      <h2>{user.data}</h2>
    </div>
  );
};

export default UserCard;
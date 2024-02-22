/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/fetchUsers';
import UserCard from './UserCard';

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.items);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log
 
  return (
    <div>
      {users.map(user => (
        <UserCard key={user.data } user={user} />
      ))}
    </div>
  );
};

export default UsersList;
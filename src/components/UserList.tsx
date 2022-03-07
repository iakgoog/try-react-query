import React from 'react'
import { useQuery } from 'react-query';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const USERS_KEY = "users";

export const UserList = () => {
  const {
    isLoading,
    data: users,
    isError,
    error
  } = useQuery<User[], Error>(
    USERS_KEY,
    () => fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response failed')
        }
        return res.json()
      }));

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error?.message}</span>
  }

  return (
    <ul>
      {users?.map(({ name, username, email }: User) => (
        <div className="userRow">
          <h3>{name}</h3>
          <p>Username: {username}</p>
          <p>{email}</p>
        </div>
      ))}
    </ul>
  );

}
import React from 'react';
import axios from 'axios';

import { useMutation, useQueryClient } from 'react-query';

import { User, USERS_KEY } from './UserList';;

const exampleUser = {
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  username: 'johndoe1990'
} as User;

const postUser = (user: User) => axios.post<User>('https://jsonplaceholder.typicode.com/users', user);

export const CreateUser = () => {
  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(postUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(USERS_KEY);
    }
  });
  const onButtonClick = () => mutate(exampleUser);

  if (isLoading) {
    return <p>Createing User...</p>
  }

  return <button onClick={onButtonClick} >Click to post a new user</button>
}
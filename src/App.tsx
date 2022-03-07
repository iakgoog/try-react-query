import React from 'react';
import logo from './logo.svg';
import './App.css';

import { QueryClientProvider, QueryClient } from 'react-query';

import { UserList } from './components/UserList';
import { CreateUser } from './components/CreateUser';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1>React Query Demo</h1>
        </header>
        <UserList />
        <CreateUser />
      </div>
    </QueryClientProvider>
  );
}

export default App;

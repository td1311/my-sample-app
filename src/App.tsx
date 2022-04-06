import logo from './logo.svg';
import React from 'react';
import { UsersList } from './features/user/UsersList';
import './App.css';
import { AppNavigator } from './navigator/AppNavigator';
import { Home } from './features/home/Home';
import { Counter } from './features/counter/Counter';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <div>
    <AppNavigator />
    // </div>

    // <Home />
    // <div>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="redux" element={<Counter />} />
    //     <Route path="usersList" element={<UsersList />} />
    //   </Routes>
    // </div>
  );
}

export default App;

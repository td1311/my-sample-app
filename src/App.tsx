import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/Counter';
import { Pokemon } from './features/pokemon/Pokemon';
import { UsersList } from './features/user/UsersList';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <UsersList />
  );
}

export default App;

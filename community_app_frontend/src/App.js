import React from 'react';
import './App.css';
import Nav from './Components/Nav'
// import CreatePosts from './Components/CreatePosts'
import Home from './Components/Home'
import { Routes } from './Components/Routes'

function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <CreatePosts/> */}
      {/* <Home/> */}

      <main>
        <Routes/>
      </main>
    </div>
  );
}

export default App;

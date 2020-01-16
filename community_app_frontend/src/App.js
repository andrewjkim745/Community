import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import CreatePosts from './Components/CreatePosts'
import Home from './Components/Home'
import { Routes } from './Components/Routes'
import PostDetails from './Components/PostDetails'

function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <PostDetails/> */}
      {/* <CreatePosts/> */}
      {/* <Home/> */}

      <main>
        <Routes/>
      </main>
    </div>
  );
}

export default App;

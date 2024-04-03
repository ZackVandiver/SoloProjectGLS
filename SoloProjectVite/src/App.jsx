import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import PostLogin from './components/PostLogin'

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Add more routes as needed */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post-login" element={<PostLogin />} />
      </Routes>
    </div>
  );
}

export default App;
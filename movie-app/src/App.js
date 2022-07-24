import React, { Component } from 'react';
import './App.css';
import MovieRoutes from './components/MovieRoutes';
import UserRoutes from './components/UserRoutes';
import LandingPage from './pages/LandingPage';

function App(){
  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
}

export default App;

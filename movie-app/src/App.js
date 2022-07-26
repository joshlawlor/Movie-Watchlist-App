import React, { Component } from 'react';
import {Link , Route , Routes} from 'react-router-dom'
import './App.css';
import MovieRoutes from './components/MovieRoutes';
import UserRoutes from './components/UserRoutes';
import LandingPage from './pages/LandingPage/LandingPage';
import SignUpPage from './pages/SignUpPage/SignUpPage'
import LoginPage from './pages/LoginPage/LoginPage'

function App(){
  return (
    <div className="App">
      <ul className='navbar'>
        <li><Link to="/users/login">Login</Link></li>
        <li><Link to="/users/signup">Signup</Link></li>
      </ul>

      <Routes>
          <Route path ='/users/login' element={<LoginPage/>}/>
          <Route path='/users/signup' element={<SignUpPage/>}/>
          <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import {Link , Route , Routes} from 'react-router-dom'
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import SignUpPage from './pages/SignUpPage/SignUpPage'
import LoginPage from './pages/LoginPage/LoginPage'
import MoviesPage from './pages/MoviesPage/MoviesPage'

function App(){
  return (
    <div className="App">
      <ul className='navbar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/movies'>Movies</Link></li>
        <li><Link to="/users/login">Login</Link></li>
        <li><Link to="/users/signup">Signup</Link></li>
{/* Need a way to show certain links only when logged in */}
      </ul>

      <Routes>
          <Route path='/movies' element={<MoviesPage/>}/>
          <Route path='/users/login' element={<LoginPage/>}/>
          <Route path='/users/signup' element={<SignUpPage/>}/>
          <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

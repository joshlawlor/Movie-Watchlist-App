import React, { useState } from 'react';
import {Link , Route , Routes} from 'react-router-dom'
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import SignUpPage from './pages/SignUpPage/SignUpPage'
import LoginPage from './pages/LoginPage/LoginPage'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import WatchListPage from './pages/WatchListPage/WatchListPage'
import FriendsPage from './pages/FriendsPage/FriendsPage'
import tokenService from './utils/tokenService';
import UserService from './utils/UserService';
const backendURL = "http://localhost:9000/";
// const token = tokenService.getToken();


function App(){
  // const [user,setUser] = useState({});
  // if(token){
  //   setUser(UserService.getUser(token));
  // }
  return (
    <div className="App">
      <ul className='navbar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/movies'>Movies</Link></li>
        <li><Link to='/watchlist'>Watch List</Link></li>
        <li><Link to="/friends">Friends</Link></li>         
        {/* Need to have :userid incorporated into Watchlist and Friends so it's specific to user */}
        <li><Link to="/users/login">Login</Link></li>
        <li><Link to="/users/signup">Signup</Link></li>
        {/* Need a way to show certain links only when logged in */}
      </ul>

      <Routes>
          <Route path='/movies' element={<MoviesPage/>}/>
          <Route path='/users/login' element={<LoginPage/>}/>
          <Route path='/users/signup' element={<SignUpPage backendURL={backendURL}/>}/>
          <Route path='/watchlist' element={<WatchListPage/>}/>
          <Route path='/friends' element={<FriendsPage/>}/>
          {/* Need to have :userid incorporated into Watchlist and Friends so it's specific to user */}
          <Route path='/' element={<LandingPage backendURL={backendURL}/>}/>
      </Routes>

    </div>
  )
}

export default App;
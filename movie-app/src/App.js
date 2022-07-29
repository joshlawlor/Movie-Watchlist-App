<<<<<<< HEAD
import React, { useState } from 'react';
import {Link , Route , Routes} from 'react-router-dom'
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import SignUpPage from './pages/SignUpPage/SignUpPage'
import LoginPage from './pages/LoginPage/LoginPage'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import WatchListPage from './pages/WatchListPage/WatchListPage'
import FriendsPage from './pages/FriendsPage/FriendsPage'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
// import tokenService from './utils/tokenService';
// import UserService from './utils/UserService';
const backendURL = "http://127.0.0.1:9000";
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
          <Route path='/movies' element={<MoviesPage backendURL={backendURL}/>}/>
          <Route path='/movies/:id' element={<MovieDetailsPage backendURL={backendURL}/>}/>
          <Route path='/users/login' element={<LoginPage backendURL={backendURL}/>}/>
          <Route path='/users/signup' element={<SignUpPage backendURL={backendURL}/>}/>
          <Route path='/watchlist' element={<WatchListPage backendURL={backendURL}/>}/>
          <Route path='/friends' element={<FriendsPage backendURL={backendURL}/>}/>
          {/* Need to have :userid incorporated into Watchlist and Friends so it's specific to user */}
          <Route path='/' element={<LandingPage backendURL={backendURL}/>}/>
      </Routes>

    </div>
  )
=======
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
>>>>>>> 2798717 (created framework and landingPage)
}

export default App;
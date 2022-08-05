import React, { useState } from 'react';
import {Link , Route , Routes} from 'react-router-dom'
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import MoviesPage from './pages/MoviesPage/MoviesPage'
import WatchListPage from './pages/WatchListPage/WatchListPage'
import FriendsPage from './pages/FriendsPage/FriendsPage'
import tokenService from './utils/tokenService';
import UserService from './utils/UserService';
const backendURL = "http://127.0.0.1:9000";
import Modal from 'react-modal';
import SignUpForm from './components/SignUpForm/SignUpForm';
import LoginForm from './components/LoginForm/LoginForm';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';


function App(){

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(true);

  return (
    <div className="App">
      <Modal className='modal'isOpen={modalIsOpen} onRequestClose={()=>{setIsOpen(false)}}>{modalContent}</Modal>
      <ul className='navbar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/movies'>Movies</Link></li>
        <li><Link to='/watchlist'>Watch List</Link></li>
        <li><Link to="/friends">Friends</Link></li>         
        {/* Need to have :userid incorporated into Watchlist and Friends so it's specific to user */}

        <li><button onClick={()=>{setIsOpen(true);setModalContent(<LoginForm backendURL={backendURL} setIsOpen={setIsOpen}/>)}}>Login</button></li>
        <li><button onClick={()=>{setIsOpen(true);setModalContent(<SignUpForm backendURL={backendURL} setIsOpen={setIsOpen}/>)}}>Signup</button></li>

        {/* Need a way to show certain links only when logged in */}
      </ul>

      <Routes>
          <Route path='/movies' element={<MoviesPage backendURL={backendURL}/>}/>
          <Route path='movies/:imdbId' element={<MovieDetailsPage backendURL={backendURL}/>}/>
          <Route path='/watchlist' element={<WatchListPage backendURL={backendURL}/>}/>
          <Route path='/friends' element={<FriendsPage backendURL={backendURL}/>}/>
          {/* Need to have :userid incorporated into Watchlist and Friends so it's specific to user */}
          <Route path='/' element={<LandingPage backendURL={backendURL}/>}/>
      </Routes>

    </div>
  )
}

export default App;
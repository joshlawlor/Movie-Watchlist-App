import React, {useState} from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm.jsx'
import Modal from 'react-modal';
import styles from './LandingPage.css'




const LandingPage = ({backendURL}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(true);

    const loginListener = (e) => {
        e.preventDefault();
        setModalContent(true);
        setIsOpen(true);
    }
    const SignUpListener = (e) => {
        e.preventDefault();
        setModalContent(false);
        setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
      <div>
        <h1>Movie App</h1>
        <h3>Created By:</h3>
        <h4>Ben Broad, Josh Lawlor, Joshua Garst, Sloane Smith</h4>
        <Modal className='modal'isOpen={modalIsOpen} onRequestClose={closeModal}>
            {modalContent?<LoginForm/>:<SignUpForm/>}
        </Modal>
        <button className='landingButton' onClick={loginListener}>Login</button>
        <br></br>
        <button class='landingButton' onClick={SignUpListener}>Create an Account</button>
        <div><img class="movieImage" src="https://cliparting.com/wp-content/uploads/2017/05/Movie-reel-movie-film-clip-art-clipartfest-strip-clipart-2.jpeg" alt="gif"></img></div>
    </div>

  )
}

export default LandingPage
import React, {useState} from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import Modal from 'react-modal';


const LandingPage = () => {
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
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            {modalContent?<LoginForm/>:<SignUpForm/>}
        </Modal>
        <button onClick={loginListener}>Login</button>
        <button onClick={SignUpListener}>Create an Account</button>
    </div>
  )
}

export default LandingPage
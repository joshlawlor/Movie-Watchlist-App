import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
// import styles from './LoginPage.css'


const LoginPage = ({backendURL}) => {
  return (
    <div class='loginPage'>
        <LoginForm backendURL={backendURL}/>
    </div>
  )
}

export default LoginPage
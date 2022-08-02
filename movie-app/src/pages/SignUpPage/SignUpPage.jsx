import React from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

const SignUpPage = ({backendURL}) => {
  return (
    <div>
        <SignUpForm backendURL={backendURL}/>
    </div>
  )
}

export default SignUpPage
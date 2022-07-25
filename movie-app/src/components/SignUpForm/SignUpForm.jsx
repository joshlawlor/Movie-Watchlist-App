import React, {useState} from 'react'
import { Navigate } from 'react-router-dom';

const SignUpForm = ({backendURL}) => {
    const [userCred, SetUserCred] = useState({email: "", password: "", confirmPassword: ""})
    const [errorCode, setErrorCode] = useState(0); // 1 is passoword don't match, 2 is email already taken

    function handleChange(event){
        SetUserCred({ ...userCred, [event.target.id]: event.target.value });
    };
    async function testUserCred(){
      await fetch(`${backendURL}/users/signup`,{method: "POST", header: userCred})
      .then((response) => {
          if(!response.ok){
            console.log(response);
          }else if(response === "email in use"){
            setErrorCode(2);
          }else{
            setErrorCode(0);
            <Navigate to="/HomePage" replace={true} /> // redirect to homepage
          }
      })
   }
    function handleSubmit(e){
      e.preventDefault();
      if(userCred.password === userCred.confirmPassword){
        testUserCred();
      }
      else{
        setErrorCode(1);
      }
    }
  return (
    <form class='form' onSubmit={handleSubmit}>
      <br/>
        <label htmlFor="Email">Email</label>
        <input onChange={handleChange} type="email" name="email" id="email" />
        {(errorCode===2)?<p className='error'>this email is already associated with an account</p>:null}
        <label htmlFor="password">password</label>
        <input onChange={handleChange} type="password" name="password" id="password"/>
        {(errorCode===1)?<p className='error'>passwords don't match</p>:null}
        <label htmlFor="password">confirm password</label>
        <input onChange={handleChange} type="confirmPassword" name="confirmPassword" id="confirmPassword" />
        <br/>
        <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignUpForm
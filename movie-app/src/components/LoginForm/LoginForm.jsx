import React, { useState } from 'react';
import './LoginForm.css'
import tokenService from '../../utils/tokenService';


const LoginForm = ({backendURL}) => {
    const [userCred, SetUserCred] = useState({email: "", password: ""});
    const [errorCode, setErrorCode] = useState(0); // 1 email not found, 2 is password incorrect

    function handleChange(event){
        SetUserCred({ ...userCred, [event.target.id]: event.target.value });
    };
    async function testUserCred(){
      console.log(userCred)
      await fetch(`${backendURL}/users/login`,{method: "POST", body: JSON.stringify(userCred), headers: new Headers({'content-Type': 'application/json'})})
      .then((response) => {
        console.log(response)
          if(!response.ok){
            console.log(response.body);
          }else {
            setErrorCode(0);
            return response.json()
          }
      }).then(({token}) => {
        tokenService.setToken(token)
      }).catch(err =>{
        console.log(err)
      })
    }
    function handleSubmit(e){
      e.preventDefault();
      testUserCred();
    }
  
  return (
    <form className= 'form' classonSubmit={handleSubmit}>
        {(errorCode===1)?<p className='error'>this email is not in our system</p>:null}
        <label htmlFor="Email">Email</label>
        <input onChange={handleChange} type="email" name="email" id="email" />
        {(errorCode===2)?<p className='error'>the password you entered is incorrect</p>:null}
        <label htmlFor="password">Password</label>
        <input onChange={handleChange} type="password" name="password" id="password" />
        <br/>
        <button className='loginButton' type="submit">Log In</button>
    </form>
  )
}

export default LoginForm
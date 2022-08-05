import React, { useState } from 'react';
import './LoginForm.css'
import tokenService from '../../utils/tokenService';
import { useNavigate } from 'react-router-dom';


const LoginForm = ({backendURL}) => {
    const [userCred, SetUserCred] = useState({email: "", password: ""});
    const [errorCode, setErrorCode] = useState(0); // 1 email not found, 2 is password incorrect
    let navigate = useNavigate()

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
      navigate("/movies", {replace: true})
      
    }
    
  
  return (
    <form class='form' onSubmit={handleSubmit}>
      <br/>
      <h3> User Login </h3>
        <div className='loginForm'>
          {errorCode===1?<p>email not found</p>:null}
          {errorCode===2?<p>Password is incorrect</p>:null}
        <label className='label' htmlFor="Email">Email</label>
        <input className="inputBox" onChange={handleChange} type="email" name="email" id="email" />
        </div>
        <div className='loginForm'>
        <label clasName='label' htmlFor="password">Password</label>
        <input className="inputBox" onChange={handleChange} type="password" name="password" id="password" />
        </div>
        <br/>
        <button className='loginButton' type="submit">Log In</button>
    </form>
  )
}

export default LoginForm
import React, { useState } from 'react';
import './LoginForm.css'


const LoginForm = ({backendURL}) => {
    const [userCred, SetUserCred] = useState({email: "", password: ""});
    const [errorCode, setErrorCode] = useState(0); // 1 email not found, 2 is password incorrect

    function handleChange(event){
        SetUserCred({ ...userCred, [event.target.id]: event.target.value });
    };
    async function testUserCred(){
        await fetch(`${backendURL}/users/login`,{method: "POST", header: userCred})
        .then((response) => {
            if(!response.ok){
              console.log(response);
            }else if(response === "email not found"){
              setErrorCode(1);
            }else if(response === "password incorrect"){
              setErrorCode(2);
            }else{
              setErrorCode(0);
              <Navigate to="/HomePage" replace={true} />
            }
        })
    }
    function handleSubmit(e){
      e.preventDefault();
      testUserCred();
    }
  
  return (
    <form onSubmit={handleSubmit}>
        {(errorCode===1)?<p className='error'>this email is not in our system</p>:null}
        <label htmlFor="Email"/>
        <input onChange={handleChange} type="email" name="email" id="email" />
        {(errorCode===2)?<p className='error'>the password you entered is incorrect</p>:null}
        <label htmlFor="password"></label>
        <input onChange={handleChange} type="password" name="password" id="password" />
        <br/>
        <button type="submit">Log In</button>
    </form>
  )
}

export default LoginForm
import React, { useState } from 'react';
import './LoginForm.css'


const LoginForm = () => {
    const [userCred, SetUserCred] = useState({email: "", password: ""})

    function handleChange(event){
        SetUserCred({ ...userCred, [event.target.id]: event.target.value });
    };
    function handleSubmit(e){
        e.preventDefault();
        //send a request to check the database here
    }
  return (
    <form class='form' onSubmit={handleSubmit}>
      <br/>
        <label htmlFor="Email">Email</label>
        <input onChange={handleChange} type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input onChange={handleChange} type="password" name="password" id="password" />
        <br/>
        <button type="submit">Log In</button>
    </form>
  )
}

export default LoginForm
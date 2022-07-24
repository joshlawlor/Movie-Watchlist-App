import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
        <label htmlFor="Email"/>
        <input onChange={handleChange} type="email" name="email" id="email" />
        <label htmlFor="password"></label>
        <input onChange={handleChange} type="password" name="password" id="password" />
        <button type="submit">Log In</button>
    </form>
  )
}

export default LoginForm
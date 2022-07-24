import React, {useState} from 'react'

const SignUpForm = () => {
    const [userCred, SetUserCred] = useState({email: "", password: "", confirmPassword: ""})

    function handleChange(event){
        SetUserCred({ ...userCred, [event.target.id]: event.target.value });
    };
    function handleSubmit(e){
        e.preventDefault();
        if(userCred.password === userCred.confirmPassword){
             //send a request to check the database here
        }
       else{
            //send a message to user
       }
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="Email">email</label>
        <input onChange={handleChange} type="email" name="email" id="email" />
        <label htmlFor="password">password</label>
        <input onChange={handleChange} type="password" name="password" id="password" />
        <label htmlFor="password">confirm password</label>
        <input onChange={handleChange} type="confirmPassword" name="confirmPassword" id="confirmPassword" />
        <button type="submit">Log In</button>
    </form>
  )
}

export default SignUpForm
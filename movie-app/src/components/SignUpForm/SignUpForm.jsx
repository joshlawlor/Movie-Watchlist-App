import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';
import tokenService from '../../utils/tokenService';
import './SignUpForm.css'


const SignUpForm = ({backendURL}) => {
    const [userCred, SetUserCred] = useState({email: "", password: "", confirmPassword: ""})
    const [errorCode, setErrorCode] = useState(0); // 1 is passoword don't match, 2 is email already taken

    function handleChange(event){
        SetUserCred({ ...userCred, [event.target.id]: event.target.value });
    };
    async function testUserCred(){
      console.log(userCred)
      await fetch(`${backendURL}/users/signup`,{method: "POST", body: JSON.stringify(userCred), headers: new Headers({'content-Type': 'application/json'})})
      .then((response) =>{
        if(!response.ok){
          console.log(response.body);
        }else{
            setErrorCode(0);
            console.log(response);
            console.log(response.json());
            return response.json();
        }
      }).then(({token}) => {
        tokenService.setToken(token)
      }).catch(err =>{
        console.log(err)
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
    <form class="form" onSubmit={handleSubmit}>
      <br/>
      <h3>User Sign Up</h3>
        {(errorCode===1)?<p className='error'>passwords don't match</p>:null}
        {(errorCode===2)?<p className='error'>this email is already associated with an account</p>:null}
        <label htmlFor="Email">Email</label>
        <input onChange={handleChange} type="email" name="email" id="email" />
        <label htmlFor="password">password</label>
        <input onChange={handleChange} type="password" name="password" id="password"/>
        <label htmlFor="password">confirm password</label>
        <input onChange={handleChange} type="confirmPassword" name="confirmPassword" id="confirmPassword" />
        <button className='signUpButton' type="submit">Sign Up</button>
        <br/>
    </form>
  )
}

export default SignUpForm
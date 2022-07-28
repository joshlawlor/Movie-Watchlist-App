import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';
import tokenService from '../../utils/tokenService';

const SignUpForm = ({backendURL}) => {
    const [userCred, SetUserCred] = useState({email: "", password: "", confirmPassword: ""})
    const [errorCode, setErrorCode] = useState(0); // 1 is passoword don't match, 2 is email already taken

    function handleChange(event){
        SetUserCred({ ...userCred, [event.target.id]: event.target.value });
    };
    async function testUserCred(){
      console.log(userCred)
      await fetch(`${backendURL}users/signup`,{method: "POST", body: JSON.stringify(userCred), headers: new Headers({'content-Type': 'application/json'})})
      .then((response) => {
        console.log(response)
          if(!response.ok){
            console.log(response.body);
          }else if(response === "email in use"){
            setErrorCode(2);
          }else{
            return response.json()
            setErrorCode(0);
            // setToken(response);
            
          }
      }).then(({token}) => {
        console.log(token)
        tokenService.setToken(token)
        {<Redirect to="/"/>}
      }).catch(err =>{
        console.log('test user ')
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
    <form class='form' onSubmit={handleSubmit}>
      <br/>
      <h3>User Sign Up</h3>
        <label htmlFor="Email">Email</label>
        <input onChange={handleChange} type="email" name="email" id="email" />
        {(errorCode===2)?<p className='error'>this email is already associated with an account</p>:null}
        <label htmlFor="password">password</label>
        <input onChange={handleChange} type="password" name="password" id="password"/>
        {(errorCode===1)?<p className='error'>passwords don't match</p>:null}
        <label htmlFor="password">confirm password</label>
        <input onChange={handleChange} type="confirmPassword" name="confirmPassword" id="confirmPassword" />
        <button type="submit">Sign Up</button>
        <br/>
    </form>
  )
}

export default SignUpForm
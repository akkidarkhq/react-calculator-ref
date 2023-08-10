import React from 'react'
import './Login.css'


import AuthService from '../../Services/auth.service';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [errMsg,setErrMsg] = useState("");
    
    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    }

    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    }    

    const handleSubmit = (event) =>{
      event.preventDefault();
      // const status =  
      
      AuthService.login(username, password).
      then(respone=>{
        navigate("/profile")}
        ).catch((err)=>{
          if(err==401){
              setErrMsg("Please Check Your Credentials")
          }
        })
     
    };
     
  return (
    <div className='logincomp'> 
    <div className='label'> 
      Login
    </div>
      <form onSubmit={handleSubmit}>
        <div className='inputcontainer'>
          Username
          <input className='input' 
            onChange={onChangeUsername} 
            value={username} 
            name='username' 
            type='text' >

          </input>
          Password
          <input className='input' 
            onChange={onChangePassword} 
            name='password' 
            value={password} 
            type='password'>
          </input>
          <div>{errMsg}</div>
          <button className='loginbutton' type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;
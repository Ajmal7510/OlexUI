import React, { useState } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Security/AouthContext';

function Login() {


  const aouthContext = useAuth();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [loginError,setLoginError]=useState(false)
  const navigate=useNavigate()

  const handleChange=(e)=>{
   
    const { value, name } = e.target;


    switch (name) {
      case 'password':
        setPassword(value)
        break;
        case 'email':
          setEmail(value)
          break;
      
      default:
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const loginSuccess = await aouthContext.login(email, password);
    
    if (loginSuccess) {
      console.log("Login successful");
      navigate('/')
    } else {
      setLoginError(true);
      console.log("Login failed");
    }
  }
  


  return (
    <div>
      <div className="loginParentDiv">
        {loginError && <h5>Login fail</h5>}
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>handleChange(e)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
           value={password}
           onChange={(e)=>handleChange(e)}
           
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a className='signup-button' onClick={()=>navigate('/signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;

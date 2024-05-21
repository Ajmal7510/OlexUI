import React, { useState } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Security/AouthContext';

export default function Signup() {

  const [signupError, setSignupError] = useState(false); // Corrected typo here
  const aouthContext = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value); 
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (aouthContext.Signup(username, email, phoneNumber, password)) {
      navigate('/login');
    } else {
      setSignupError(true);
    }
  };

  return (
    <div>
      {signupError && <h5 className='signupError'>signup error</h5>}
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="number">Phone</label>
          <br />
          <input
            className="input"
            type="tel"
            id="number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>
        <a className='login-button' onClick={()=>navigate("/login")}>Login</a>
      </div>
    </div>
  );
}

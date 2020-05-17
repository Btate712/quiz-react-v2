import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/userActions';
import { URL } from '../applicationConstants';

const LoginPage = () => {
  const [input, setInput] = useState({username: "", password: ""});
  const loggedIn = useSelector(state => state.user.loggedIn);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  const handleLogin = event => {
    event.preventDefault();
    dispatch(login(URL, input.username, input.password));
  }

  return (
    <>
      <label>Username:
        <input 
          className="login"
          type="text" 
          onChange={handleInputChange} 
          value={input.username} 
          name="username" />
      </label>
      <label>Password:
        <input 
          className="login"
          type="password" 
          onChange={handleInputChange} 
          value={input.password} 
          name="password" />
      </label>
      <button onClick={handleLogin} className="login" >Log In</button>
      {loggedIn ? <Redirect to="/" /> : ""}
    </>
  )
}

export default LoginPage;
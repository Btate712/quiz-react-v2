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
    <section className="login-container">
      <div className="form-group">
        <label className="plain-text" forHTML="username">Username:
          <input 
            className="login"
            type="text" 
            onChange={handleInputChange} 
            value={input.username} 
            name="username"
            id="username" />
        </label>
      </div>
      <div className="form-group">
        <label className="plain-text">Password:
          <input 
            className="login"
            type="password" 
            onChange={handleInputChange} 
            value={input.password} 
            name="password" 
            id="password"/>
        </label>
      </div>
      <button onClick={handleLogin} className="btn btn-medium btn-info" >Log In</button>
      {loggedIn ? <Redirect to="/" /> : ""}
    </section>
  )
}

export default LoginPage;
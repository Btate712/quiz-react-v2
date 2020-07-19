import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../actions/userActions';
import { URL } from '../applicationConstants';

const RegistrationPage = () => {
  const [user, setUser] = useState({ name: "", password: "" });
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user);

  const handleInputChange = e => {
    setUser({ 
      ...user,
      [e.target.name]: e.target.value 
    });
  }

  const handleSubmit = () => {
    dispatch(register(URL, user));
  }

  return (
    <>
      <h2>Registration:</h2>
      <label htmlFor="name">
        User Name: <br />
        <input name="name" type="text" value={user.name} onChange={handleInputChange}/>
      </label>
      <br />
      <label htmlFor="email">
        Email: <br />
        <input name="email" type="email" value={user.email} onChange={handleInputChange}/>
      </label>
      <br />
      <label htmlFor="password">
        Password: <br />
        <input name="password" type="password" value={user.password} onChange={handleInputChange}/>
      </label>
      <br />
      <button onClick={handleSubmit}>Register New User</button>
      { currentUser.inProgress && <p>Registering. Please stand by...</p> }
      { currentUser.loggedIn && <Redirect to="/" /> }
    </>
  )
}

export default RegistrationPage;
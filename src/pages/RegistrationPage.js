import React, { useState } from 'react';

const RegistrationPage = () => {
  const [user, setUser] = useState({ name: "", password: "" });

  const handleInputChange = e => {
    setUser({ 
      ...user,
      [e.target.name]: e.target.value 
    });
  }

  const handleSubmit = () => {
    alert(`Creating new user with name: ${user.name} and password: ${user.password}`);
  }

  return (
    <>
      <h2>Registration:</h2>
      <label name="name">
        User Name:
        <input name="name" type="text" value={user.name} onChange={handleInputChange}/>
      </label>
      <br />
      <label name="password">
        Password:
        <input name="password" type="text" value={user.password} onChange={handleInputChange}/>
      </label>
      <br />
      <button onClick={handleSubmit}>Register New User</button>
    </>
  )
}

export default RegistrationPage;
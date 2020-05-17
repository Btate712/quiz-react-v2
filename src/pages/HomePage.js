import React, { useState, useEffect }  from 'react';

const HomePage = props => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const configurationObject = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: "admin",
        password: "admin"
      })
    }

    fetch("http://localhost:3000/login", configurationObject)
      .then(response => response.json()) 
      .then(json => console.dir(json));
  });

  return (
    <h1>Home Page...</h1>
  )
}

export default HomePage;
import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const user = useSelector(state => state.user);

  return (
    <div className="home-container">
      <h1>Home Page...</h1>
      <h2>Welcome {user.name ? user.name : "loading"}</h2>
    </div>
  )
}

export default HomePage;
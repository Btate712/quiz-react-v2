import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';

const HomePage = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(login("http://localhost:3000", "admin", "admin"));
  }, []);

  return (
    <>
      <h1>Home Page...</h1>
      <h2>Welcome {user.name ? user.name : "loading"}</h2>
    </>
  )
}

export default HomePage;
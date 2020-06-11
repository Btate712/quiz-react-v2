import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../actions/projectActions';

const HomePage = () => {
  const user = useSelector(state => state.user);
  const projects = useSelector(state => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects(user.token));
  }, []);

  return (
    <div className="home-container">
      <h1>Home Page...</h1>
      <h2>Welcome {user.name ? user.name : "loading"}</h2>
      <h3>Projects:</h3>
      { projects.projectList.map(project => project.name) }
    </div>
  )
}

export default HomePage;
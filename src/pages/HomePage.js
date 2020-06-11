import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../actions/projectActions';

const HomePage = () => {
  const user = useSelector(state => state.user);
  const projects = useSelector(state => state.projects);

  const dispatch = useDispatch();
  
  const [selectedProjects, setSelectedProjects] = useState(["a project"]);

  useEffect(() => {
    dispatch(getProjects(user.token));
  }, []);

  const updateProjectsList = () => {
    setSelectedProjects(currentSelectedProjects => [...currentSelectedProjects, "and another"]);
  }

  return (
    <div className="home-container">
      <h1>Home Page...</h1>
      <h2>Welcome {user.name ? user.name : "loading"}</h2>
      <h3>Projects:</h3>
      { projects.projectList.map(project => project.name) }
      <br />
      <button onClick={updateProjectsList}>Click Me!</button>
      <br />
      <h3>Selcted Projects:</h3>
      { selectedProjects.map(project => <li>{project}</li>) }
    </div>
  )
}

export default HomePage;
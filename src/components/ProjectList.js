import React from 'react';

export const ProjectList = ({projects}) => {
  return projects.projectList.map((project, key) => {
    return (
      <label key={key}>
        <input type="checkbox"/>
        {project.name}
      </label>
    );
  });
}
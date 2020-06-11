export const ProjectList = ({projects}) => {
  
  return projects.projectList.map(project => project.name)
}
import { URL } from '../applicationConstants';

export function getProjects(token) {
  return dispatch => {
    console.log("Getting Projects...");
    dispatch({ type: 'GETTING_PROJECTS' });
    const configurationObject = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }
    fetch(`${URL}/projects`, configurationObject)
      .then(resp => resp.json())
      .then(json => {
        console.log("JSON: ", json);
        dispatch({ type: 'SAVE_PROJECTS', payload: json.projects });
      });
  }
}
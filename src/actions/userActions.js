export function login(url, username, password) {
  return dispatch => {
    dispatch({ type: 'LOGGING_IN', payload: { username: username, password: password }});
    const configurationObject = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }
    
    fetch(`${url}/login`, configurationObject)
      .then(response => response.json()) 
      .then(json => {
        if(json.status === "success") {
          const payload = {
            id: json.user.id,
            email: json.user.email,
            name: json.user.name,
            token: json.jwt,
            admin: json.user.is_admin
          };
          dispatch({ type: 'LOGGED_IN', payload: payload });
        }  
      });

  }
}

export function initializeUser() {
  return dispatch => dispatch({ type: "INITIALIZE_USER" });
}

export function register(url, user) {
  return dispatch => {
    const configurationObject = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user)
    }
    fetch(`${url}/users`, configurationObject)
      .then(response => response.json())
      .then(() => dispatch(login(url, user.name, user.password)));    
  }
}

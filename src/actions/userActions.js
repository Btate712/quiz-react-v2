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

// export function login(url, username, password) {
//   return dispatch => {
//     dispatch({ type: 'LOGGING_IN', action: { username: username, password: password } });
//     let configurationObject = {
//       method: "POST",
//       mode: "cors",
//       headers: 
//         { 
//           "Content-type": "application/json" ,
//           "Accept": "application/json" 
//         },
//       body: JSON.stringify({ 
//         username: username, 
//         password: password 
//       })
//     }
//   fetch(`${url}/auth/login`, configurationObject)
//     .then(response => response.json())
//     .then(json => {
//       if (json.message === "Login Successful") {
//         const token = json.access_token;
//         configurationObject = {
//           method: "GET",
//           headers: {
//             "Content-type": "application/json",
//             "Accept": "application/json",
//             authorization: token
//           }
//         } 
//         fetch(`${url}/users/me`, configurationObject)
//         .then(response => response.json())
//         .then(user => {
//           console.log(user);
//           dispatch({ 
//             type: 'LOGGED_IN', 
//             token: token, 
//             admin: user.user.is_admin,
//             projects: user.projects
//           });
//         })
//       } else {
//         dispatch({ type: 'LOGIN_FAILED' });
//       }
//     });
//   }
// }

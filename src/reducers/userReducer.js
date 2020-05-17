const userReducer = (
  state = {
    id: "",
    name: "",
    email: "",
    admin: false,
    inProgress: false,
    token: "",
    loggedIn: false,
    initialized: false
  }, action) => {
    switch(action.type) {
      case 'INITIALIZE_USER': 
        return {
          ...state,
          initialized: true
        };
      case 'LOGGING_IN':
        return {
          ...state,
          name: action.payload.name,
          inProgress: true
        }
      case 'LOGGED_IN':
        return {
          inProgress: false,
          loggedIn: true,
          id: action.id,
          name: action.payload.name,
          email: action.payload.email,
          admin: action.payload.admin,
          token: action.payload.token,
        }
      default:
        return state;
    }
  }

  export default userReducer;

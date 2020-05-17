const userReducer = (
  state = {
    name: "",
    admin: false,
    inProgress: false,
    token: "",
    loggedIn: false
  }, action) => {
    switch(action.type) {
      case 'LOGGING_IN':
        return {
          ...state,
          name: action.name,
          inProgress: true
        }
      case 'LOGGED_IN':
        return {
          ...state,
          inProgress: false,
          loggedIn: true,
          token: action.token,
          admin: action.admin
        }
      default:
        return state;
    }
  }

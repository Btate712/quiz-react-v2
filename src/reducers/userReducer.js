const userReducer = (
  state = {
    id: "",
    name: "",
    email: "",
    admin: false,
    inProgress: false,
    token: "",
    loggedIn: false
  }, action) => {
    switch(action.type) {
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
        console.log("Unexpected action dispatched...");
        return state;
    }
  }

  export default userReducer;

const projectReducer = (
  state = {
    projectList: [],
    inProgress: false
  }, action
  ) => {
    switch (action.type) {
      case 'GETTING_PROJECTS':
        return ({
          ...state,
          inProgress: true
        });
      case 'SAVE_PROJECTS':
        console.log("In Project Reducer, payload is:", action.payload);
        return ({
          projectList: action.payload,
          inProgress: false
        });
      default:
        return state;
    }
}

export default projectReducer;
import userReducer from './userReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: userReducer,
  projects: projectReducer
})

export default rootReducer;
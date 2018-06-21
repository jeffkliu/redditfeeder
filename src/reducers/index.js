import {combineReducers} from 'redux';
import redditList from './githubReducers';
 
const rootReducer = combineReducers({
  // short hand property names
  redditList
})
 
export default rootReducer;
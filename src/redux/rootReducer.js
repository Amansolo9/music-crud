import { combineReducers } from 'redux';
import songReducer from './reducers/songReducer'; 

const rootReducer = combineReducers({
  songs: songReducer,
  
});

export default rootReducer;
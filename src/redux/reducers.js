import { combineReducers } from 'redux';
import authReducer from './reducer/authReducer';
import userReducer from './reducer/userReducer';
import errorReducer from './reducer/errorReducer';
//rootReducer 

export default combineReducers({
    
  auth : authReducer,
  user : userReducer,
  error: errorReducer,
}); 
import { combineReducers } from 'redux';
import authReducer from './reducer/authReducer';
import userReducer from './reducer/userReducer';
import errorReducer from './reducer/errorReducer';
import tankReducer from './reducer/tankReducer';
//rootReducer 

export default combineReducers({
    
  auth : authReducer,
  user : userReducer,
  error: errorReducer,
  tank: tankReducer
}); 
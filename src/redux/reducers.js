import { combineReducers } from 'redux';
import authReducer from './reducer/authReducer';

//rootReducer 

export default combineReducers({
    auth:authReducer
});
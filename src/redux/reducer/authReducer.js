import {USER_LOADING, LOGIN_SUCESS} from '../action/types';



const initState = {
    token : null,
    isAuthenticated : null,
    isLoading : false,
    user : null
}

const authReducer = (state= initState, action)=> {
    console.log(action.payload)
    switch(action.type)
    {
        case USER_LOADING: 
            return {
                ...state,
                isLoading: true               
        }
        case LOGIN_SUCESS: 
            return {
                ...state,
                isLoading: false,
                user:action.payload
            }

        default :
        return state;
    }

}

export default authReducer;
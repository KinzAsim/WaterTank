import {USER_LOADING, LOGIN_SUCESS, USER_LOADED} from '../action/types';



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
        case USER_LOADED:
            return {
                ...state,
                isLoading:false 
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
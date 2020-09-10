import {USER_LOADING, LOGIN_SUCCESS, url} from './types';
import axios from 'axios';


export const login = (email, password)=> {
    console.log(email,password);
    return (dispatch, getState)=> {
        dispatch({
            type:USER_LOADING
        })

    const config = {
        headers : {
            'Content-type' : 'Application/json' 
        }
    }
    const body = JSON.stringify({
        email,
        password,
    })
    axios.post(`${url}/user/login`, body, config)
    .then(res=>
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        }))
    .catch(err => {
         console.log(err.response.data);
    })
}
}

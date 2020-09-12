import {USER_LOADING, LOGIN_SUCCESS, url, USER_LOADED} from './types';
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

export const loadUser = ()=> {
       console.log("Loader");
    return(dispatch,getState)=> {
        dispatch({
            type: USER_LOADING,
        });
       // console.log('i am loader');

    const config = {
        headers : {
          'Content-type':'Application/json'
        }
    }
    axios.get(`${url}/user/loadUser`, config)
    .then(res=>
        dispatch({
            type:USER_LOADED,
            payload:res.data,

        }))
    .catch(err => {
        console.log("Loader");
    })
    }
}
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, ADD_NOTIFICATION, LOADING_START, LOADING_END } from '../constants/actionTypes';
import { callApi } from '../services/http';


const auth = (type, user) => {

  return (dispatch) => {
    dispatch({ type: AUTH_REQUEST });
    dispatch({ type: LOADING_START });
    callApi(type, {method: 'post', body: user})
	    .then(response => {
        dispatch({ type: LOADING_END });
	    	return response.json().then( json => ({ ok: response.ok, json }) )
	    }) 
	    .then(({ok, json}) => {
	    	  dispatch({ type: ok ? AUTH_SUCCESS : AUTH_FAILURE, payload: json });
	        dispatch({ type: ADD_NOTIFICATION, payload: { message: json.message, ok: ok, autoclosing: true } });
	    })
  		.catch(response => {
  		    dispatch({ type: AUTH_FAILURE, payload: 'There was an error while parsing response' });
	        dispatch({ type: ADD_NOTIFICATION, payload: { message: 'There was an error while parsing response', ok: false } });
  		});
  };
};

export const signIn = (user) => auth('signIn', user);
export const signUp = (user) => auth('signUp', user);
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from '../constants/actionTypes';
import { callApi } from '../services/http';


const auth = (type, user) => {

  return (dispatch) => {
    dispatch({
      type: AUTH_REQUEST
    });
    callApi(type, {method: 'post', body: user})
	    .then((response) => response.json())
	    .then((response) => {
	    	dispatch({
	          type: response.ok ? AUTH_SUCCESS : AUTH_FAILURE,
	          payload: response
	        });
	    })
  		.catch((response) => {
  			dispatch({
	          type: AUTH_FAILURE,
	          payload: 'There was an error while parsing response'
	        });
  		});
  };
};


export const signIn = (user) => auth('signIn', user);
export const signUp = (user) => auth('signUp', user);
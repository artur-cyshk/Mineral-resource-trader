import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from '../constants/actionTypes';

const initialState = {
  fetching: false,
  isSignUpDone: false
};

export default function auth(state = initialState, action) {
	switch(action.type) {
		case AUTH_REQUEST: 
			return {
				fetching: true, isSignUpDone: false 
			};
		case AUTH_SUCCESS: 
			return {
				fetching: false, isSignUpDone: true 
			};
		case AUTH_FAILURE: 
			return {
				fetching: false, isSignUpDone: false 
			};
		default:
			return state;
	}
};
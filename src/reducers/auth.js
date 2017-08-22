import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from '../constants/actionTypes';

const initialState = {
  user: {},
  isAuthorized: false,
  fetching: false,
  error: {}
};

export default function auth(state = initialState, action) {
	switch(action.type) {
		case AUTH_REQUEST: 
			return {
				...state, fetching: true 
			};
		case AUTH_SUCCESS: 
			return {
				...state, fetching: false, isAuthorized: true, user: action.payload, error: {}
			};
		case AUTH_FAILURE: 
			return {
				...state, fetching: false, isAuthorized: false, error: action.payload, user: {}
			};	
		default:
			return state;
	};
};
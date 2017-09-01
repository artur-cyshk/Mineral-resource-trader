import { GET_ALL_USERS, CLEAR_USERS_LIST, UPDATE_USER_BY_ID } from '../constants/actionTypes';

export default (state = [], action) => {
	switch(action.type) {
		case GET_ALL_USERS: 
			return [...state, ...action.payload];
		case CLEAR_USERS_LIST:
			return [];	
		case UPDATE_USER_BY_ID:
			return state.map(user => user.id === action.payload.id ? action.payload : user);
		default:
			return state;
	}
};
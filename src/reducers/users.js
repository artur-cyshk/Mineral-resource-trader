import { GET_ALL_USERS, CLEAR_USERS_LIST } from '../constants/actionTypes';

export default (state = [], action) => {
	switch(action.type) {
		case GET_ALL_USERS: 
			return [...state, ...action.payload];
		case CLEAR_USERS_LIST:
			return [];	
		default:
			return state;
	}
};
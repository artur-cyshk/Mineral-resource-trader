import { SET_CURRENT_USER, UNSET_CURRENT_USER } from '../constants/actionTypes';

const initialState = {
	currentUser: {}
};

export default (state = initialState, action) => {
	switch(action.type) {
		case SET_CURRENT_USER: 
			return {
				currentUser: action.payload
			};
		case UNSET_CURRENT_USER: 
			return {
				currentUser: {}
			};
		default:
			return state;
	}
};
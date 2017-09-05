import { SET_RESOURCES } from '../constants/actionTypes';

export default (state = [], action) => {
	switch(action.type) {
		case SET_RESOURCES: 
			return [action.payload];
		default: 
			return state;	
	}
};
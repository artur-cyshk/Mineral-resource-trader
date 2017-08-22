import * as actionTypes from '../constants/actionTypes';


const initialState = {
	activities: ['gold', 'oil']
};

export default function activities(state = initialState, action) {
	switch(action) {
		case actionTypes.GET_ACTIVITIES: 
			return {
				...state
			};
		default:
			return state;
	};
};
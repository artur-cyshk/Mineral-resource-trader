import * as actionTypes from '../constants/actionTypes';


const initialState = {
	items: ['gold', 'oil']
};

export default function operations(state = initialState, action) {
	switch(action) {
		case actionTypes.BUY_ITEM: 
			return {
				...state
			};
		default:
			return state;
	}
};
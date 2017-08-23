import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants/actionTypes';

const initialState = [{type: 'success', message: 'bdfdasf dasfad0 fdoasf adfok adsfojda fodafjadof ee'}, {type: 'failed', message: 'bee2'}, {type: 'error', message: 'bee'}, {type: 'error', message: 'bee2'}, {type: 'error', message: 'bee'}, {type: 'error', message: 'bee2'}];

export default function notifications(state = initialState, action) {
	switch(action.type) {
		case ADD_NOTIFICATION: 
			return [action.payload, ...state];
		case REMOVE_NOTIFICATION: 
			return state.filter((notification, i) => i !== action.payload);
		default:
			return state;
	}
};
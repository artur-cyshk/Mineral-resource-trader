import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants/actionTypes';
import { generateGuid } from '../services/helper';

export default function notifications(state = [], action) {
	switch(action.type) {
		case ADD_NOTIFICATION: 
			return [...state, { guid: generateGuid(), ...action.payload }];
		case REMOVE_NOTIFICATION: 
			return state.filter((item, i) => item.guid !== action.payload)
		default:
			return state;
	}
};
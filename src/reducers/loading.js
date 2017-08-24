import { LOADING_START, LOADING_END } from '../constants/actionTypes';

const initialState = {
  isLoading: false
};

export default function auth(state = initialState, action) {
	switch(action.type) {
		case LOADING_START: 
			return {
				isLoading: true
			};
		case LOADING_END: 
			return {
				isLoading: false
			};
		default:
			return state;
	}
};
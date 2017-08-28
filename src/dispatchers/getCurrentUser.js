import { setCurrentUser, unsetCurrentUser } from '../actions/auth';
import { fetchDispatcher } from './';
import * as localStorageService from '../services/localStorage';

const successDispatcher = (response, dispatch) => {
	if(response.isUnauthorized || response.isBanned) {
		localStorageService.removeItem('access_token');
	}
	dispatch(setCurrentUser(response));
}

const errorDispatcher = (response, dispatch) => {
	if(response.isUnauthorized || response.isBanned) {
		localStorageService.removeItem('access_token');
	}
	dispatch(unsetCurrentUser());
}


export default () => {
	return fetchDispatcher(
		{
			route: 'getCurrentUser',
			config: {
				method: 'GET'
			}
		},
		successDispatcher,
		errorDispatcher,
		{
			errorNotificationNeeded: true
		}
	)
} 



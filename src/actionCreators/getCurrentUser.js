import { setCurrentUser, unsetCurrentUser } from '../actions/auth';
import { fetchCreator } from './';
import * as localStorageService from '../services/localStorage';
import { UNAUTHORIZED_STATUS, NO_PERMISSION_STATUS } from '../constants/statuses';


const successHandler = (response, dispatch) => {
	dispatch(setCurrentUser(response));
}

const errorHandler = (response, dispatch) => {
	if([UNAUTHORIZED_STATUS, NO_PERMISSION_STATUS].includes(response.status)) {
		localStorageService.removeItem('access_token');
	}
	dispatch(unsetCurrentUser());
}


export default () => {
	return fetchCreator(
		{
			route: 'getCurrentUser',
			config: {
				method: 'GET'
			}
		},
		successHandler,
		errorHandler,
		{
			errorNotificationNeeded: true
		}
	)
} 

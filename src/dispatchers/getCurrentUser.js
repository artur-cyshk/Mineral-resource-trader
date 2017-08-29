import { setCurrentUser, unsetCurrentUser } from '../actions/auth';
import { fetchDispatcher } from './';
import * as localStorageService from '../services/localStorage';
import { UNAUTHORIZED_STATUS, NO_PERMISSION_STATUS } from '../constants/statuses';


const successDispatcher = (response, dispatch) => {
	dispatch(setCurrentUser(response));
}

const errorDispatcher = (response, dispatch) => {
	if([UNAUTHORIZED_STATUS, NO_PERMISSION_STATUS].includes(response.status)) {
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

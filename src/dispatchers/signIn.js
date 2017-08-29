import { authDispatcher } from './';
import { setCurrentUser } from '../actions/auth';
import * as localStorageService from '../services/localStorage';


const successDispatcher = (response, dispatch) => {
	if(response && response.token) {
		localStorageService.setItem('access_token', response.token);
		dispatch(setCurrentUser(response.user));
	}
}

export default (userData) => {
	return authDispatcher('signIn', successDispatcher, userData);
} 
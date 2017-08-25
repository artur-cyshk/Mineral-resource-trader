import { authDispatcher } from './';
import { setCurrentUser } from '../actions/auth';
import * as localStorageService from '../services/localStorage';


const successDispatcher = (response, dispatch) => {
	if(response && response.token) {
		dispatch(setCurrentUser(response.user));
		localStorageService.setItem('access_token', response.token);
	}
}

export default (userData) => {
	return authDispatcher('signIn', successDispatcher, userData);
} 
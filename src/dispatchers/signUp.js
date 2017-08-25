import { authDispatcher } from './';

const successDispatcher = (response, dispatch) => {
	//todo redirect to sign in
}

export default (userData) => {
	return authDispatcher('signUp', successDispatcher, userData);
} 
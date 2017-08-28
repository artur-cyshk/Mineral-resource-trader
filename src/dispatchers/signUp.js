import { authDispatcher } from './';
import history from '../configs/history';


const successDispatcher = (response, dispatch) => {
	history.push('/auth/signIn');
}

export default (userData) => {
	return authDispatcher('signUp', successDispatcher, userData);
} 
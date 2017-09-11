import { authCreator } from './';
import history from '../configs/history';


const successHandler = (response, dispatch) => {
	history.push('/auth/signIn');
}

export default (userData) => {
	return authCreator('signUp', successHandler, userData);
} 
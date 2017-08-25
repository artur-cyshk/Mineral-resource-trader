import { unsetCurrentUser } from '../actions/auth';
import * as localStorageService from '../services/localStorage';


export default () => (dispatch) => {
	localStorageService.removeItem('access_token');
	dispatch(unsetCurrentUser());
} 

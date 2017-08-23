import { combineReducers } from 'redux';
import auth from './auth.js';
import notifications from './notifications.js';


export default combineReducers({
	auth, notifications
});
import { combineReducers } from 'redux';
import auth from './auth.js';
import notifications from './notifications.js';
import loading from './loading.js';


export default combineReducers({
	auth, notifications, loading
});
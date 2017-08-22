import { combineReducers } from 'redux';
import operations from './operations.js';
import activities from './activities.js';
import auth from './auth.js';


export default combineReducers({
	operations,
	activities,
	auth
});
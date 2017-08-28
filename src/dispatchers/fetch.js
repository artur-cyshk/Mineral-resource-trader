import { callApi } from '../services/http';
import { UNAUTHORIZED_STATUS, BANNED_STATUS } from '../constants/endpoints';
import { loadingDispatcher, notificationsDispatcher } from './';


export default (apiCallData, successDispatcher, errorDispatcher, { successNotificationNeeded = false, errorNotificationNeeded = false }) => {
	return (dispatch) => {
		loadingDispatcher(true, dispatch);
		callApi(apiCallData.route, apiCallData.config)
		    .then(response => {
		        loadingDispatcher(false, dispatch);
		        let isUnauthorized = response.status === UNAUTHORIZED_STATUS;
		        let isBanned = response.status === BANNED_STATUS;
			    return response[isUnauthorized ? 'text' : 'json']().then( info => {
			    	return {
			    		ok: response.ok,
			    		status: response.status,
			    		json: isUnauthorized ? { message: info, isUnauthorized, isBanned } : { ...info, isBanned } 
			    	}
			    });
			}) 
		    .then(({ok, status, json}) => {
		    	if (ok) {
		    		successDispatcher({status, ...json}, dispatch);
		    		if (successNotificationNeeded && status !== UNAUTHORIZED_STATUS) {
		    			notificationsDispatcher({ message: json.message, ok: true }, true)(dispatch);
		    		} 
		    	} else {
		    		if (errorNotificationNeeded && status !== UNAUTHORIZED_STATUS) {
		    			notificationsDispatcher({ message: json.message, ok: false }, true)(dispatch);
			    	} 
			    	if (errorDispatcher) {
			    		errorDispatcher({status, ...json}, dispatch);
			    	}
		    	}
		    })
	  		.catch(response => {
	  			if (errorDispatcher) {
	  				errorDispatcher('There was an error while parsing response', dispatch);
	  			}
	  		    if (errorNotificationNeeded) {
	  		    	notificationsDispatcher({ message: 'There was an error while parsing response' }, true)(dispatch);
	  		    }
	  		});
	}
}

import { callApi } from '../services/http';
import { UNAUTHORIZED_STATUS } from '../constants/statuses';
import { loadingDispatcher, notificationsDispatcher } from './';


export default (apiCallData, successDispatcher, errorDispatcher, { successNotificationNeeded = false, errorNotificationNeeded = false }) => {
	return (dispatch) => {
		loadingDispatcher(true, dispatch);
		callApi(apiCallData.route, apiCallData.config)
		    .then(response => {
		        loadingDispatcher(false, dispatch);
		        let isUnauthorized = response.status === UNAUTHORIZED_STATUS;
			    return response[isUnauthorized ? 'text' : 'json']().then( responseData => {
			    	return {
			    		ok: response.ok,
			    		status: response.status,
			    		isUnauthorized: isUnauthorized,
			    		json: isUnauthorized ? { message: responseData } : responseData
			    	}
			    });
			}) 
		    .then(({ok, status, isUnauthorized, json}) => {
		    	if (ok) {
		    		successDispatcher(json, dispatch);
		    		if (successNotificationNeeded) {
		    			notificationsDispatcher({ message: json.message, ok: true }, true)(dispatch);
		    		} 
		    	} else {
		    		if (errorNotificationNeeded && status !== UNAUTHORIZED_STATUS) {
		    			notificationsDispatcher({ message: json.message, ok: false }, true)(dispatch);
			    	} 
			    	if (errorDispatcher) {
			    		errorDispatcher({status, isUnauthorized, ...json}, dispatch);
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
	  		    loadingDispatcher(false, dispatch);
	  		});
	}
}

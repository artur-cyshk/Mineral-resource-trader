import { callApi } from '../services/http';
import { UNAUTHORIZED_STATUS } from '../constants/statuses';
import { loadingCreator, notificationsCreator } from './';


export default (apiCallData, successCreator, errorCreator, { successNotificationNeeded = false, errorNotificationNeeded = false }) => {
	return (dispatch) => {
		loadingCreator(true, dispatch);
		callApi(apiCallData.route, apiCallData.config)
		    .then(response => {
		        loadingCreator(false, dispatch);
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
		    		successCreator(json, dispatch);
		    		if (successNotificationNeeded) {
		    			notificationsCreator({ message: json.message, ok: true }, true)(dispatch);
		    		} 
		    	} else {
		    		if (errorNotificationNeeded && status !== UNAUTHORIZED_STATUS) {
		    			notificationsCreator({ message: json.message, ok: false }, true)(dispatch);
			    	} 
			    	if (errorCreator) {
			    		errorCreator({status, isUnauthorized, ...json}, dispatch);
			    	}
		    	}
		    })
	  		.catch(response => {
	  			if (errorCreator) {
	  				errorCreator('There was an error while parsing response', dispatch);
	  			}
	  		    if (errorNotificationNeeded) {
	  		    	notificationsCreator({ message: 'There was an error while parsing response' }, true)(dispatch);
	  		    }
	  		    loadingCreator(false, dispatch);
	  		});
	}
}

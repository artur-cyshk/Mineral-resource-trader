import {fetchCreator} from './';

export default (route, successHandler, userData) => {
	return fetchCreator(
		{
			route: route,
			config: {
				method: 'POST',
				body: userData
			}
		},
		successHandler,
		null,
		{
			successNotificationNeeded: true,
			errorNotificationNeeded: true
		}
	)
}


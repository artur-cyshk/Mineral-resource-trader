import {fetchDispatcher} from './';

export default (route, successDispatcher, userData) => {
	return fetchDispatcher(
		{
			route: route,
			config: {
				method: 'POST',
				body: userData
			}
		},
		successDispatcher,
		null,
		{
			successNotificationNeeded: true,
			errorNotificationNeeded: true
		}
	)
}


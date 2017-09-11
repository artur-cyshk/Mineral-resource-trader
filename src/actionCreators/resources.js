import { setResources } from '../actions/resources';
import { fetchCreator } from './';

const successHandler = (response, dispatch) => {
	dispatch(setResources(response));
};

const errorHandler = (response, dispatch) => {
	// error handler
};

export default (page = 0) => {
	return fetchCreator(
		{
			route: 'resources',
			config: {
				method: 'GET'
			}
		},
		successHandler,
		errorHandler,
		{
			errorNotificationNeeded: true
		}
	);
};

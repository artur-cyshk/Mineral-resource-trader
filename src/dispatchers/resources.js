import { setResources } from '../actions/resources';
import { fetchDispatcher } from './';

const successDispatcher = (response, dispatch) => {
	dispatch(setResources(response));
};

const errorDispatcher = (response, dispatch) => {
	// error handler
};

export default (page = 0) => {
	return fetchDispatcher(
		{
			route: 'resources',
			config: {
				method: 'GET'
			}
		},
		successDispatcher,
		errorDispatcher,
		{
			errorNotificationNeeded: true
		}
	);
};

import { getAllUsers, clearUsersList } from '../actions/users';
import { fetchDispatcher } from './';
import { usersListItemsLimit } from '../constants/common';


const successDispatcher = (response, dispatch) => {
	dispatch(getAllUsers(response));
}

const errorDispatcher = (response, dispatch) => {
	dispatch(getAllUsers());
}

export const clearUsersListDispatcher = () => (dispatch) => dispatch(clearUsersList());

export default (page = 0) => {
	return fetchDispatcher(
		{
			route: 'getAllUsers',
			config: {
				method: 'GET',
				params: {
					page: page,
					limit: usersListItemsLimit
				}
			}
		},
		successDispatcher,
		errorDispatcher,
		{
			errorNotificationNeeded: true
		}
	)
} 

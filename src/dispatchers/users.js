import { getAllUsers, clearUsersList, updateUserById } from '../actions/users';
import { fetchDispatcher } from './';
import { usersListItemsLimit } from '../constants/common';


const successDispatcher = (response, dispatch) => {
	dispatch(getAllUsers(response));
};

const errorDispatcher = (response, dispatch) => {
	dispatch(getAllUsers());
};

export const updateUserByIdDispatcher = (data) => {
	return fetchDispatcher(
		{
			route: 'updateUser',
			config: {
				method: 'PUT',
				body: data
			}
		},
		(response, dispatch) => dispatch(updateUserById(data)),
		(response, dispatch) => dispatch(updateUserById(data)),
		{
			errorNotificationNeeded: true
		}
	);
};

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
	);
};

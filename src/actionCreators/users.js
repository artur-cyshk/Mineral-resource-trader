import { getAllUsers, clearUsersList, updateUserById } from '../actions/users';
import { fetchCreator } from './';
import { usersListItemsLimit } from '../constants/common';


const successHandler = (response, dispatch) => {
	dispatch(getAllUsers(response));
};

const errorHandler = (response, dispatch) => {
	dispatch(getAllUsers());
};

export const updateUserByIdCreator = (data) => {
	return fetchCreator(
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

export const clearUsersListCreator = () => (dispatch) => dispatch(clearUsersList());

export default (page = 0) => {
	return fetchCreator(
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
		successHandler,
		errorHandler,
		{
			errorNotificationNeeded: true
		}
	);
};

import { GET_ALL_USERS, CLEAR_USERS_LIST, UPDATE_USER_BY_ID } from '../constants/actionTypes';


export const getAllUsers = (data) => ({ type: GET_ALL_USERS, payload: data });
export const clearUsersList = (data) => ({ type: CLEAR_USERS_LIST });
export const updateUserById = (data) => ({ type: UPDATE_USER_BY_ID, payload: data });
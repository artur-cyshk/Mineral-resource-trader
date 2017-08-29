import { GET_ALL_USERS, CLEAR_USERS_LIST } from '../constants/actionTypes';


export const getAllUsers = (data) => ({ type: GET_ALL_USERS, payload: data });
export const clearUsersList = (data) => ({ type: CLEAR_USERS_LIST });
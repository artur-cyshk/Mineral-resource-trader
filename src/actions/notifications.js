import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants/actionTypes';


export const addNotification = (data) => ({ type: ADD_NOTIFICATION, payload: data });
export const removeNotification = (data) => ({ type: REMOVE_NOTIFICATION, payload: data });
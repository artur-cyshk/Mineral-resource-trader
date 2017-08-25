import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants/actionTypes';


export const addNotification = ({message, ok = false, autoclosing = true}) => ({ type: ADD_NOTIFICATION, payload: { message, ok, autoclosing } });
export const removeNotification = (data) => ({ type: REMOVE_NOTIFICATION, payload: data });
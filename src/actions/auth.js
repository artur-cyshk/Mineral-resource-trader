import { SET_CURRENT_USER, UNSET_CURRENT_USER } from '../constants/actionTypes';


export const setCurrentUser = (user) => ({ type: SET_CURRENT_USER, payload: user });
export const unsetCurrentUser = () => ({ type: UNSET_CURRENT_USER });

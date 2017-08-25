import { LOADING_START, LOADING_END } from '../constants/actionTypes';


export const startLoading = (data) => ({ type: LOADING_START });
export const endLoading = (data) => ({ type: LOADING_END });
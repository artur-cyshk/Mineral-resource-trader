import { BASE_URL, ENDPOINTS } from "../constants/endpoints";
import  * as localStorageService from './localStorage';

export const callApi = (route, config = {}) => {
	const token = localStorageService.getItem('access_token');
	config.headers = new Headers();
	config.headers.append('Content-Type' ,'application/json;charset=UTF-8');
	if (token) {
		config.headers.append('Authorization' ,`JWT ${token}`);
	}
	if(config.body) {
		config.body = JSON.stringify(config.body);
	}
	return fetch(BASE_URL + ENDPOINTS[route], config);
};
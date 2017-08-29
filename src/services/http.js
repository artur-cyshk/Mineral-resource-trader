import { BASE_URL, ENDPOINTS } from "../constants/endpoints";
import  * as localStorageService from './localStorage';

export const callApi = (route, config = {}) => {
	const url = new URL(BASE_URL + ENDPOINTS[route]);
	const token = localStorageService.getItem('access_token');
	
	config.headers = new Headers();
	config.headers.append('Content-Type' ,'application/json;charset=UTF-8');

	if (token) {
		config.headers.append('Authorization' ,`JWT ${token}`);
	}

	if(config.body) {
		config.body = JSON.stringify(config.body);
	}

	if(config.params) {
		Object.keys(config.params).forEach(key => url.searchParams.append(key, config.params[key]));
	}

	return fetch(url, config);
};
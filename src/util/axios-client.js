import {create} from "axios";

const {API_ROOT} = process.env;

/**
 * Interacts with the Backend API
 * @param {Object} requestConfig Request configuration
 * @param {'post'|'get'|'delete'|'put'} requestConfig.method HTTP verb
 * @param {String} requestConfig.url HTTP verb
 * @param {Object} requestConfig.headers HTTP http header
 * @param {Object} requestConfig.data data to send to backend
 * @return {Promise<{ data, headers, status, statusText, config }>}
 */
export const apiServiceClient = requestConfig =>
	create({
		baseURL: API_ROOT,
		timeout: 150000,
		headers: {
			"Content-Type": "application/json"
		}
	})(requestConfig);

const TOKEN_STRING = "movie-app-token";

export const getToken = () => {
    return localStorage.getItem(TOKEN_STRING) || "";
}

export const setToken = t => {
	localStorage.setItem(TOKEN_STRING, t);
};

export const removeToken = () => {
	localStorage.removeItem(TOKEN_STRING);
};

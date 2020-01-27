import { create } from 'axios';

/**
 * Interacts with the Movie DB API
 * @param {Object} requestConfig Request configuration
 * @param {'post'|'get'|'delete'|'put'} requestConfig.method HTTP verb
 * @param {String} requestConfig.url HTTP verb
 * @param {Object} requestConfig.headers HTTP http header
 * @param {Object} requestConfig.data data to send to backend
 * @return {Promise<{ data, headers, status, statusText, config }>}
 */
export const movieDbServiceClient = requestConfig => create({
  baseURL: `https://api.themoviedb.org/3`,
  timeout: 150000,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
      api_key: process.env.MOVIE_DB_API_KEY,
      language: 'en-US'
  }
})(requestConfig);

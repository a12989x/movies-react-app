const { REACT_APP_API_KEY } = process.env;

const BASE_API = 'https://api.themoviedb.org/3/';
const FEATURED_API = `${BASE_API}discover/movie?sort_by=popularity.desc&api_key=${REACT_APP_API_KEY}&page=1`;
const IMG_API = `https://image.tmdb.org/t/p/w1280`;
const SEARCH_API = `${BASE_API}search/movie?&api_key=${REACT_APP_API_KEY}&query=`;

export { BASE_API, FEATURED_API, IMG_API, SEARCH_API };

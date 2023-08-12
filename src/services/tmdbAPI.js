import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzZhZWIwMTA3MjQ3MzkyMGUyNzU3MzdhZmE3MDQwMCIsInN1YiI6IjY0ZDI2MmFiYzNiZmZlMGYwMjg2N2NkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ak4ysbLjBJTalYzsYWQkuamX-ttKVaPC86KyFzbLchk`,
  },
});

export const fetchTrendingMovies = async () => {
  try {
    const response = await instance.get('/trending/all/day');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const fetchMovieSearch = async query => {
  try {
    const response = await instance.get('/search/movie', {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies by query:', error);
    throw error;
  }
};

export const fetchMovieDetails = async id => {
  try {
    const response = await instance.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const fetchAddition = async (id, param) => {
  try {
    const response = await instance.get(`/movie/${id}/${param}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching additional movie data:', error);
    throw error;
  }
};
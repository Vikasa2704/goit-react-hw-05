import axios from 'axios';

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3c295dba77c60717daf512f06173085c';

export async function getTrendingMovies() {
  const url = `${MAIN_URL}/trending/movie/day?api_key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieById(id) {
  const url = `${MAIN_URL}/movie/${id}?api_key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieCast(id) {
  const url = `${MAIN_URL}/movie/${id}/credits?api_key=${API_KEY}`;
  try {
	const response = await axios.get(url);
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieReview(id) {
  const url = `${MAIN_URL}/movie/${id}/reviews?api_key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieByQuery(query) {
  const url =  `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
  try {
	const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}





















import axios from "axios";

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3c295dba77c60717daf512f06173085c';

const url = `${MAIN_URL}/trending/movie/day?api_key=${API_KEY}`;

const getMovies = async () => {
    const response = await axios.get(url);
    return response.data.results; 
};

export default getMovies;

export const getMovieDetailsById= async (moviesId) => {
    const response = await axios.get(`/movies/${moviesId}`);
    return response.data;
};
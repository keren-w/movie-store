
import axios from 'axios';
const apiKey = process.env.TMDB_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async () => {
    const response = await axios.get(`${API_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    });
    return response?.data || null;
};

import axios from 'axios';
const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmE0MjA0NWQxNTNjZThmMWNkNzRiMzJhMTU3NGQ5NSIsInN1YiI6IjY2MTY1ZGU1ZDhmNDRlMDE2M2RmODM1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VP4GCR7D-BoJnuK_g4bdaRoqt9_s2W8gPpdqacR4oKQ";
const API_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async () => {
    const response = await axios.get(`${API_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    });
    return response?.data || null;
};
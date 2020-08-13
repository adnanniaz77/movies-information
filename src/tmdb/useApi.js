import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (query) => {
    const [apiData, setApiData] = useState([]);
    const apiKey = "22e7c1bb96e31278c7328fa9a52b5bad";
    const searchUrl = `https://api.themoviedb.org/3/movie/${query}?language=en-US&api_key=${apiKey}`;

    useEffect(() => {
        const fetchMovies = async () => {
            const result = await axios.get(searchUrl);
            setApiData(result.data.results);
        };

        fetchMovies();
    });

    return { apiData };
};

export default useApi;

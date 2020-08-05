import React, { useState, useEffect } from "react";
import axios from "axios";

const useApi = (query) => {
    const [apiData, setApiData] = useState([]);
    const apikKey = "22e7c1bb96e31278c7328fa9a52b5bad";
    const urlUpcoming = `https://api.themoviedb.org/3/movie/${query}?language=en-US&api_key=${apikKey}`;

    useEffect(() => {
        const fetchMovies = async () => {
            const result = await axios.get(urlUpcoming);
            setApiData(result.data.results);
        };

        fetchMovies();
    }, []);

    return { apiData };
};

export default useApi;

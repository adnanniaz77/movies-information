import React, { useState, useEffect } from "react";
import axios from "axios";

function Upcoming() {
    const [apiData, setApiData] = useState([]);
    const apikKey = "22e7c1bb96e31278c7328fa9a52b5bad";
    const imgUrl = `https://image.tmdb.org/t/p/original`;
    const urlUpcoming = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=${apikKey}`;

    useEffect(() => {
        const fetchMovies = async () => {
            const result = await axios.get(urlUpcoming);
            setApiData(result.data.results);
        };

        fetchMovies();
    }, []);

    // apiData.forEach((each) => {
    //     console.log(each);
    // });

    return (
        <div className="container">
            <h2 className="row-title">Upcoming Movies</h2>

            <div className="movies-grid">
                {apiData.map((movie) => (
                    <div key={movie.id} className="movie-img-wrapper">
                        <img
                            className="poster"
                            src={imgUrl + movie.poster_path}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Upcoming;

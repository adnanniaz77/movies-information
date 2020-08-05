import React, { useState, useEffect } from "react";
import useApi from "../tmdb/useApi";

function Upcoming() {
    const imgUrl = `https://image.tmdb.org/t/p/original`;

    const { apiData } = useApi("upcoming");
    console.log(apiData);

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

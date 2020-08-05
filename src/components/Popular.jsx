import React, { useState, useEffect } from "react";
import useApi from "../tmdb/useApi";

function Popular() {
    const imgUrl = `https://image.tmdb.org/t/p/original`;
    const { apiData } = useApi("popular");

    return (
        <div className="container">
            <h2 className="row-title">Popular Movies</h2>

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

export default Popular;

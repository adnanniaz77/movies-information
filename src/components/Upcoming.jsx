import React, { useState, useEffect } from "react";
import useApi from "../tmdb/useApi";

function Upcoming() {
    const imgUrl = `https://image.tmdb.org/t/p/original`;

    const { apiData } = useApi("upcoming");
    console.log(apiData);

    return (
        <>
            <h2 className="row-title">Upcoming</h2>

            <div className="movies-grid">
                {apiData.map((movie) => (
                    <div className="movies-wrapper" key={movie.id}>
                        <div className="img-container">
                            <img
                                className="poster"
                                src={imgUrl + movie.poster_path}
                                alt=""
                            />
                            <div className="movie-info">
                                <span className="title">{movie.title}</span>
                                <span className="release_date yellow">
                                    <i className="fa fa-calendar"></i>
                                    {movie.release_date.slice(0, 4)}
                                </span>
                                <span className="popularity yellow">
                                    <i className="fa fa-line-chart"></i>
                                    {movie.popularity}
                                </span>
                                <p className="overview yellow">
                                    {movie.overview.slice(0, 150)}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Upcoming;

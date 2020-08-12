import React, { useState } from "react";
import useApi from "../tmdb/useApi";
import Modal from "./Modal";

function Popular() {
    const { apiData } = useApi("popular");

    const [selectedImg, setSelectedImg] = useState(null);
    const [title, setTitle] = useState(null);
    const [overview, setOverview] = useState(null);

    const imgUrl = `https://image.tmdb.org/t/p/original`;

    return (
        <>
            <h2 className="row-title">Popular</h2>

            <div className="movies-grid">
                {apiData.map((movie) => (
                    <div className="movies-wrapper" key={movie.id}>
                        <div className="img-container">
                            <img
                                className="poster"
                                src={imgUrl + movie.poster_path}
                                onClick={() => {
                                    setSelectedImg(imgUrl + movie.poster_path);
                                    setTitle(movie.title);
                                    setOverview(movie.overview);
                                }}
                                alt=""
                            />
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                selectedImg={selectedImg}
                setSelectedImg={setSelectedImg}
                title={title}
                overview={overview}
            />
        </>
    );
}

export default Popular;

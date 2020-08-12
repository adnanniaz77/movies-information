import React, { useState, useEffect } from "react";
import Modal from "./Modal";

function SearchResult({ apiResult }) {
    const imgUrl = `https://image.tmdb.org/t/p/original`;

    const [selectedImg, setSelectedImg] = useState(null);
    const [title, setTitle] = useState(null);
    const [overview, setOverview] = useState(null);

    return (
        <>
            <div className="movies-grid">
                {apiResult.map((movie) => (
                    <div className="movies-wrapper" key={movie.id}>
                        <div className="img-container">
                            <img
                                className="poster"
                                src={
                                    movie.poster_path === null
                                        ? `/images/placeholder.jpg`
                                        : imgUrl + movie.poster_path
                                }
                                onClick={() => {
                                    setSelectedImg(
                                        movie.poster_path === null
                                            ? "https://drive.google.com/file/d/1bK_E_uw195FN4Kaw1vi9wdejH9hujtU3/view?usp=sharing"
                                            : imgUrl + movie.poster_path
                                    );
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

export default SearchResult;

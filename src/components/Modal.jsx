import React from "react";

export default function Modal({
    selectedImg,
    setSelectedImg,
    title,
    overview,
}) {
    const handleClick = (e) => {
        e.target.classList.contains("backdrop") && setSelectedImg(null);
    };

    return (
        <div>
            {selectedImg && (
                <div className="backdrop" onClick={handleClick}>
                    <div className="movie-info">
                        <h3 className="title">{title}</h3>
                        <p className="overview">{overview}</p>
                    </div>
                    <img src={selectedImg} alt="" />
                </div>
            )}
        </div>
    );
}

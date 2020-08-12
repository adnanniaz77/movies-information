import React from "react";

export default function Modal({ selectedImg, setSelectedImg }) {
    const handleClick = (e) => {
        console.log(e.target.classList);
        e.target.classList.contains("backdrop") && setSelectedImg(null);
    };

    return (
        <div>
            {selectedImg && (
                <div className="backdrop" onClick={handleClick}>
                    <img src={selectedImg} alt="" />
                </div>
            )}
        </div>
    );
}

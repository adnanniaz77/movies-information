import React from "react";

export const Header = () => {
    return (
        <div className="header">
            <h1>
                <a href="/" style={{ color: "#fff" }}>
                    Movies Information
                </a>
            </h1>
            <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
                <span className="tagline">Browse Movies Information</span>
            </a>
        </div>
    );
};

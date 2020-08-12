import React, { useState } from "react";
import axios from "axios";

export default function Search({ setApiResult }) {
    const [search, setSearch] = useState("");

    const apiKey = "22e7c1bb96e31278c7328fa9a52b5bad";
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`;

    const handleChange = (e) => {
        e.target.value && setSearch(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await axios.get(searchUrl);
        setApiResult(result.data.results);
        setSearch("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className="search-label">Search: </label>
                <input
                    type="text"
                    className="search-input"
                    onChange={handleChange}
                    value={search}
                />
            </form>
        </div>
    );
}

import React from "react";

export default function OptionList({ setSelected, apiResult }) {
    const handleChange = (e) => {
        setSelected(e.target.value);
    };

    return (
        <div>
            <label className="select-label">Category:</label>

            <select onChange={handleChange}>
                <option value="playing-now">Playing Now</option>
                <option value="top-rated">Top Rated Movies</option>
                <option value="upcoming">Upcoming Movies</option>
                <option value="popular">Popular Movies</option>
            </select>
        </div>
    );
}

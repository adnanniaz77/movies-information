import React from "react";

export default function OptionList({ setSelected }) {
    const handleChange = (e) => {
        setSelected(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className="select-list">
            <label className="select-label">Select Category:</label>

            <select onChange={handleChange}>
                <option value="playing-now">Playing Now</option>
                <option value="top-rated">Top Rated Movies</option>
                <option value="upcoming">Upcoming Movies</option>
                <option value="popular">Popular Movies</option>
            </select>
        </div>
    );
}

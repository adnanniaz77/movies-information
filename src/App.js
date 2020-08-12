import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import "./style.css";
import PlayingNow from "./components/PlayingNow";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import Popular from "./components/Popular";
import Modal from "./components/Modal";

export default function App() {
    const [selected, setSelected] = useState("playing-now");

    const handleChange = (e) => {
        setSelected(e.target.value);
        console.log(e.target.value);
    };

    console.log(selected);

    return (
        <div className="App-wrapper">
            <Header />

            <div className="select-list">
                <label className="select-label">Select Category:</label>

                <select onChange={handleChange}>
                    <option value="playing-now">Playing Now</option>
                    <option value="top-rated">Top Rated Movies</option>
                    <option value="upcoming">Upcoming Movies</option>
                    <option value="popular">Popular Movies</option>
                </select>
            </div>

            {selected === "playing-now" && <PlayingNow />}
            {selected === "upcoming" && <Upcoming />}
            {selected === "popular" && <Popular />}
            {selected === "top-rated" && <TopRated />}

            {/* <Modal /> */}
        </div>
    );
}

import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import "./style.css";
import PlayingNow from "./components/PlayingNow";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import Popular from "./components/Popular";
import OptionList from "./components/OptionList";

export default function App() {
    const [selected, setSelected] = useState("playing-now");

    return (
        <div className="App-wrapper">
            <Header />

            <OptionList selected={selected} setSelected={setSelected} />

            {selected === "playing-now" && <PlayingNow />}
            {selected === "upcoming" && <Upcoming />}
            {selected === "popular" && <Popular />}
            {selected === "top-rated" && <TopRated />}
        </div>
    );
}

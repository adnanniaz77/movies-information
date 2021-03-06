import React, { useState } from "react";
import { Header } from "./components/Header";
import "./style.css";
import PlayingNow from "./components/PlayingNow";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import Popular from "./components/Popular";
import OptionList from "./components/OptionList";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";

export default function App() {
    const [selected, setSelected] = useState("playing-now");
    const [apiResult, setApiResult] = useState([]);

    return (
        <div className="App-wrapper">
            <Header />
            <div className="select-list">
                <Search
                    apiResult={apiResult}
                    setApiResult={setApiResult}
                    setSelected={setSelected}
                />
                <OptionList
                    selected={selected}
                    setSelected={setSelected}
                    apiResult={apiResult}
                />
            </div>

            <SearchResult apiResult={apiResult} />

            {selected === "playing-now" && <PlayingNow />}
            {selected === "upcoming" && <Upcoming />}
            {selected === "popular" && <Popular />}
            {selected === "top-rated" && <TopRated />}
        </div>
    );
}

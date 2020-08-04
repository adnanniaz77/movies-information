import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import "./style.css";
import PlayingNow from "./components/PlayingNow";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import Popular from "./components/Popular";
import OptionList from "./components/OptionList";

export default function App() {
    // const [apidata, setApiData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    const [selected, setSelected] = useState("playing-now");

    return (
        <div className="container">
            <Header />
            <OptionList />
            <PlayingNow />
            <Upcoming />
            <Popular />
            <TopRated />
        </div>
    );
}

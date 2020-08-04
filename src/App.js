import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import "./style.css";
import PlayingNow from "./components/PlayingNow";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import Popular from "./components/Popular";

export default function App() {
    // const [apidata, setApiData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="container">
            <Header />
            <PlayingNow />
            <Upcoming />
            <Popular />
            <TopRated />
        </div>
    );
}

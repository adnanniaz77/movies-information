import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import MoviesGrid from "./components/MoviesGrid";

function App() {
    return (
        <div className="App">
            <Header />
            <Search />
            <MoviesGrid />
        </div>
    );
}

export default App;

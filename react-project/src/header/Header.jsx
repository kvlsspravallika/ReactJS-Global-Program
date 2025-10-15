import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar.jsx";

function Header() {
    const handleSearch = (query) => {
        console.log("Searching for:", query);
        // You can add API calls or navigation logic here
    };

    return (
        <header className="header d-flex flex-column justify-content-center align-items-center text-white">
            <div className="brand">
                <p>
                    <span className="brand-bold">netflix</span>
                    <span className="brand-normal">roulette</span>
                </p>
            </div>

            <h1 className="find-your-movie">FIND YOUR MOVIE</h1>

            <div className="header-content text-center search-bar">
                <SearchBar
                    intialQuery="What do you want to search?"
                    onSearch={handleSearch}
                />
            </div>
        </header>
    );
}

export default Header;

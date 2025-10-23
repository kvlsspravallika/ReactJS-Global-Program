import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar.jsx";
import {createPortal} from "react-dom";
import AddMovieModal from "../modal/AddMovieModal.jsx";

function Header({handleSearchResult}) {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div>
            <header className="header d-flex flex-column justify-content-center align-items-center text-white">
                <div className="brand">
                    <p>
                        <span className="brand-bold">netflix</span>
                        <span className="brand-normal">roulette</span>
                    </p>
                </div>

                <h1 className="find-your-movie">FIND YOUR MOVIE</h1>

                <div className="header-content text-center search-bar" id="add-movie-modal-placement">
                    <SearchBar
                        intialQuery="What do you want to search?"
                        onSearch={handleSearchResult}
                    />
                </div>

                <div className = "brand">
                    <button onClick={() => setShowModal(true)}>+ ADD MOVIE</button>
                    {showModal && createPortal(
                        <AddMovieModal handleCloseModal={() => setShowModal(false)} />,
                        document.getElementById("add-movie-modal-placement")
                    )}
                </div>
            </header>
        </div>
    );
}

export default Header;

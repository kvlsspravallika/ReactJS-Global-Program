import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar.jsx";
import { createPortal } from "react-dom";
import AddMovieModal from "../modal/AddMovieModal.jsx";
import { useOutletContext } from "react-router-dom";

function Header() {
  const { handleSearchQuery, query } = useOutletContext(); // query from URL
  const [showModal, setShowModal] = React.useState(false);

  return (
    <header className="header d-flex flex-column justify-content-center align-items-center text-white">
      <div className="brand">
        <p>
          <span className="brand-bold">netflix</span>
          <span className="brand-normal">roulette</span>
        </p>
      </div>

      <h1 className="find-your-movie">FIND YOUR MOVIE</h1>

      <div
        className="header-content text-center search-bar"
        id="add-movie-modal-placement"
      >
        <SearchBar
          initialQuery={query} // prefill from URL
          onSearch={handleSearchQuery} // update URL on submit
        />
      </div>

      <div className="brand">
        <button onClick={() => setShowModal(true)}>+ ADD MOVIE</button>
        {showModal &&
          createPortal(
            <AddMovieModal handleCloseModal={() => setShowModal(false)} />,
            document.getElementById("add-movie-modal-placement")
          )}
      </div>
    </header>
  );
}

export default Header;

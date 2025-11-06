import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieTile.css'
import {createPortal} from "react-dom";
import EditMovieModal from "../modal/EditMovieModal.jsx";
import MovieFilterControls from "../filter-bar/MovieFilterControls.jsx";
import DeleteMovieModal from "../modal/DeleteMovieModal.jsx";
import { useParams } from 'react-router-dom';
import { useLoaderData, useNavigate } from 'react-router-dom';

function MovieTile() {

    const selectedMovie = useLoaderData();
    const navigate = useNavigate();

    const[showEditMovieModal, setShowEditMovieModal] = React.useState(false);
    const[showDeleteMovieModal, setShowDeleteMovieModal] = React.useState(false);

    const handleEditClick = () => {
        setShowEditMovieModal(true);
        navigate("/edit/" + selectedMovie.id);
    }

    const handleHomeClick = () => {
        navigate('/');
    }
    return (
        <header className="header d-flex flex-column justify-content-center
        align-items-center text-white movie-tile-header" id="movie-tile-header"
        >
            <div className="brand" onClick={handleHomeClick} id="home-button">
                <p>
                    <span className="brand-bold">netflix</span>
                    <span className="brand-normal">roulette</span>
                </p>
            </div>



            <div className="container-fluid bg-dark text-light py-5" id = "movie-image-tile">
                <div className="container">
                    <div className="row align-items-center">
                        {/* LEFT: Poster */}
                        <div className="col-md-4 text-center">
                            <img
                                src={selectedMovie.poster_path}
                                alt={selectedMovie.title}
                                className="img-fluid rounded shadow"
                                style={{ maxHeight: "500px", objectFit: "cover" }}
                            />
                        </div>

                        {/* RIGHT: Movie details */}
                        <div className="col-md-8" >
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h1 className="display-5 mb-0">{selectedMovie.title}</h1>
                                <div className="border border-light rounded-circle px-3 py-2">
                                    <strong>{selectedMovie.vote_average}</strong>
                                </div>
                            </div>

                            <p className="text-secondary mb-2">
                                {selectedMovie.genres?.join(", ") || "Action & Adventure"}
                            </p>

                            <p className="text-danger fw-bold mb-4">
                                {selectedMovie.release_date?.split("-")[0]} &nbsp; | &nbsp; {selectedMovie.runtime}
                            </p>

                            <p className="lead" style={{ lineHeight: "1.6" }}>
                                {selectedMovie.overview}
                            </p>
                            <button className="add-movie-buttons"
                            onClick={() => setShowEditMovieModal(true)}>
                                EDIT</button>
                            {
                                showEditMovieModal && createPortal(<EditMovieModal movieToEdit={selectedMovie}
                                                                                   handleCloseModal={() => setShowEditMovieModal(false)}/>,
                                    document.getElementById("portal-root")
                                )
                            }
                            <button className="add-movie-buttons"
                            onClick={() => setShowDeleteMovieModal(true)}>DELETE</button>
                            {showDeleteMovieModal && createPortal(
                                <DeleteMovieModal movieToDelete={selectedMovie} handleCloseModal={() => setShowDeleteMovieModal(false)}/>,
                                document.getElementById("portal-root")
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MovieTile;

import React, { useEffect, useState } from "react";
import './EditMovieModal.css';

function EditMovieModal({ movieToEdit, handleCloseModal }) {
    const [movieTitle, setMovieTitle] = useState("");
    const [movieReleaseDate, setMovieReleaseDate] = useState("");
    const [moviePosterPath, setMoviePosterPath] = useState("");
    const [movieRating, setMovieRating] = useState("");
    const [movieRunTime, setMovieRunTime] = useState("");
    const [overview, setOverview] = useState("");
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [id, setId] = useState(null);
    const [movieUpdatedSuccessfully, setMovieUpdatedSuccessfully] = useState(false);

    const urlToEditMovie = "http://localhost:4000/movies";

    // Sync form fields whenever movieToEdit changes
    useEffect(() => {
        console.log("Movie to Edit:", movieToEdit);
        if (movieToEdit) {
            setMovieTitle(movieToEdit.title || "");
            setMovieReleaseDate(movieToEdit.release_date || "");
            setMoviePosterPath(movieToEdit.poster_path || "");
            setMovieRating(movieToEdit.vote_average || "");
            setMovieRunTime(movieToEdit.runtime || "");
            setOverview(movieToEdit.overview || "");
            setSelectedGenres(movieToEdit.genres || []);
            setId(movieToEdit.id || null);
        }
    }, [movieToEdit]);

    const handleGenreChange = (event) => {
        const selected = Array.from(event.target.selectedOptions, option => option.value);
        setSelectedGenres(selected);
    };

    const handleReset = () => {
        setMovieTitle("");
        setMovieReleaseDate("");
        setMoviePosterPath("");
        setMovieRating("");
        setMovieRunTime("");
        setOverview("");
        setSelectedGenres([]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const movieToUpdate = {
            title: movieTitle,
            release_date: movieReleaseDate,
            poster_path: moviePosterPath,
            vote_average: parseInt(movieRating, 10),
            runtime: parseInt(movieRunTime, 10),
            overview: overview,
            genres: selectedGenres,
            id: id
        };
        console.log(movieToUpdate);
        console.log(`${urlToEditMovie}/${id}`)

        try {
            const res = await fetch(`${urlToEditMovie}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(movieToUpdate)
            });
            const data = await res.json();
            console.log('Success:', data);
            setMovieUpdatedSuccessfully(true);
            window.location.reload();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="modal-overlay" id="add-movie-modal">
            <div className="modal-content">
                <h1 id="add-movie-header">EDIT MOVIE</h1>
                <form>
                    {/* Title & Release Date */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="title" className="form-label">TITLE</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                placeholder="Enter Title"
                                value={movieTitle}
                                onChange={(e) => setMovieTitle(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="release-date" className="form-label">RELEASE DATE</label>
                            <input
                                type="date"
                                className="form-control"
                                id="release-date"
                                value={movieReleaseDate}
                                onChange={(e) => setMovieReleaseDate(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Poster & Rating */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="movie-url" className="form-label">MOVIE POSTER PATH</label>
                            <input
                                type="text"
                                className="form-control"
                                id="movie-url"
                                value={moviePosterPath}
                                onChange={(e) => setMoviePosterPath(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="rating" className="form-label">RATING</label>
                            <input
                                type="number"
                                className="form-control"
                                id="rating"
                                value={movieRating}
                                onChange={(e) => setMovieRating(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Genre & Runtime */}
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="genre" className="form-label">GENRE</label>
                            <select
                                id="genre"
                                className="form-select form-select-lg mb-3"
                                multiple
                                value={selectedGenres}
                                onChange={handleGenreChange}
                            >
                                <option value="crime">Crime</option>
                                <option value="documentary">Documentary</option>
                                <option value="horror">Horror</option>
                                <option value="comedy">Comedy</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="runtime" className="form-label">RUNTIME</label>
                            <input
                                type="number"
                                className="form-control"
                                id="runtime"
                                value={movieRunTime}
                                onChange={(e) => setMovieRunTime(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Overview */}
                    <div className="overview-section">
                        <label htmlFor="text-area" className="form-label">OVERVIEW</label>
                        <textarea
                            className="form-control"
                            id="text-area"
                            value={overview}
                            onChange={(e) => setOverview(e.target.value)}
                        ></textarea>
                    </div>
                </form>

                <div className="d-flex modal-buttons">
                    <button type="button" onClick={handleReset} className="add-movie-buttons">RESET</button>
                    <button type="button" onClick={handleSubmit} className="add-movie-buttons">SUBMIT</button>
                    <button type="button" onClick={handleCloseModal} className="add-movie-buttons">CLOSE</button>
                </div>
            </div>
        </div>
    );
}

export default EditMovieModal;

import './AddMovieModal.css'
import React, {useState} from "react";
import {createPortal} from "react-dom";
import MovieSuccessModal from "./MovieSuccessModal.jsx";
function AddMovieModal({handleCloseModal}) {

    const [movieTitle, setMovieTitle] = useState('');
    const [movieReleaseDate, setMovieReleaseDate] = useState('');
    const [moviePosterPath, setMoviePosterPath] = useState('');
    const [movieRating, setMovieRating] = useState('');
    const [movieRunTime, setMovieRunTime] = useState('');
    const [overview, setOverview] = useState('');
    const [selectedGenres, setSelectedGenres] = useState([]);
    const urlToAddMovie = "http://localhost:4000/movies";
    const [movieAddedSuccessfully, setMovieAddedSuccessfully] = useState(false);

    const handleGenreChange = (event) => {
        const selected = Array.from(event.target.selectedOptions, option => option.value)
        setSelectedGenres(selected);
    }

    const handleReset = () => {
        setMovieTitle('');
        setMovieReleaseDate('');
        setMoviePosterPath('');
        setMovieRating('');
        setMovieRunTime('');
        setOverview('');
        setSelectedGenres([]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        const movieToAdd = {
            title: movieTitle,
            release_date: movieReleaseDate,
            poster_path: moviePosterPath,
            vote_average: parseInt(movieRating),
            runtime: parseInt(movieRunTime),
            overview: overview,
            genres: selectedGenres
        }
        console.log(movieToAdd);
        fetch(urlToAddMovie, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieToAdd)
        }).then(res => res.json())
        .then(data => {
            console.log('Success:', data);
            setMovieAddedSuccessfully(true);
            window.location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div className="modal-overlay" id="add-movie-modal">
            <div className="modal-content">
                <h1 id="add-movie-header"> ADD MOVIE </h1>
                <form>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="title" className="form-label">TITLE</label>
                            <input type="text" className="form-control"
                                   id="title" placeholder="Enter Title"
                                   value = {movieTitle}
                                   onChange={(e) => setMovieTitle(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="release-date" className="form-label">RELEASE DATE</label>
                            <input  type="date" className="form-control" id="release-date"
                                   placeholder="Select Date" value = {movieReleaseDate}
                            onChange ={(e) => setMovieReleaseDate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="movie-url" className="form-label">MOVIE POSTER PATH</label>
                            <input type="text" className="form-control"
                                   id="movie-url" value={moviePosterPath}
                                onChange={(e) => setMoviePosterPath(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="rating" className="form-label">RATING</label>
                            <input type="number" className="form-control" id="rating" value = {movieRating}
                            onChange={(e) => setMovieRating(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="genre" className="form-label">GENRE</label>
                            <select className="form-select form-select-lg mb-3"
                                    multiple aria-label=".form-select-lg example"
                                    value={selectedGenres} onChange={handleGenreChange}
                            >
                                <option value="crime">Crime</option>
                                <option value="documentary">Documentary</option>
                                <option value="horror">Horror</option>
                                <option value="comedy">Comedy</option>
                                <option value="comedy">Drama</option>
                                <option value="comedy">Romance</option>

                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="runtime" className="form-label">RUNTIME</label>
                            <input type="number" className="form-control" id="runtime" value={movieRunTime}
                            onChange = {(e) => setMovieRunTime(e.target.value)}/>
                        </div>
                    </div>
                    <div className="overview-section">
                        <label htmlFor="text-area" className="form-label">OVERVIEW</label>
                        <textarea className="form-control" id={"text-area"} value={overview}
                            onChange={(e) => setOverview(e.target.value)}
                        ></textarea>
                    </div>
                </form>
                <div className="d-flex  modal-buttons">
                    <button onClick={handleReset} className="add-movie-buttons">RESET</button>
                    <button onClick={handleSubmit} className="add-movie-buttons" >SUBMIT</button>
                    {movieAddedSuccessfully && createPortal(
                    <MovieSuccessModal handleCloseModal={() => setMovieAddedSuccessfully(false)} />,
                    document.getElementById("add-movie-modal")
                    )}
                    <button onClick={handleCloseModal} className="add-movie-buttons" >CLOSE</button>
                </div>
            </div>
        </div>
    );
}

export default AddMovieModal;

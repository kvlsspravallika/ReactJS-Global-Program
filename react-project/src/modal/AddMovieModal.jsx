import './AddMovieModal.css';
import React from "react";
import { createPortal } from "react-dom";
import MovieSuccessModal from "./MovieSuccessModal.jsx";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function AddMovieModal() {
  const navigate = useNavigate();
  const urlToAddMovie = "http://localhost:4000/movies";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      title: "",
      release_date: "",
      poster_path: "",
      vote_average: "",
      runtime: "",
      overview: "",
      genres: [],
    },
  });

  const onSubmit = async (data) => {
    const movieToAdd = {
      title: data.title,
      release_date: data.release_date,
      poster_path: data.poster_path,
      vote_average: parseInt(data.vote_average, 10),
      runtime: parseInt(data.runtime, 10),
      overview: data.overview,
      genres: data.genres,
    };

    try {
      const res = await fetch(urlToAddMovie, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movieToAdd),
      });
      const result = await res.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  const handleReset = () => {
    reset(); // React Hook Form reset
  };

  return (
    <div className="modal-overlay" id="add-movie-modal">
      <div className="modal-content">
        <h1 id="add-movie-header">ADD MOVIE</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Title & Release Date */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="title" className="form-label">TITLE</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter Title"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && <p className="error-text">{errors.title.message}</p>}
            </div>

            <div className="col-md-6">
              <label htmlFor="release-date" className="form-label">RELEASE DATE</label>
              <input
                type="date"
                className="form-control"
                id="release-date"
                {...register("release_date", { required: "Release date is required" })}
              />
              {errors.release_date && <p className="error-text">{errors.release_date.message}</p>}
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
                {...register("poster_path", { required: "Poster path is required" })}
              />
              {errors.poster_path && <p className="error-text">{errors.poster_path.message}</p>}
            </div>

            <div className="col-md-6">
              <label htmlFor="rating" className="form-label">RATING</label>
              <input
                type="number"
                className="form-control"
                id="rating"
                {...register("vote_average", {
                  required: "Rating is required",
                  min: { value: 0, message: "Min value is 0" },
                  max: { value: 10, message: "Max value is 10" },
                })}
              />
              {errors.vote_average && <p className="error-text">{errors.vote_average.message}</p>}
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
                {...register("genres", { required: "At least one genre required" })}
              >
                <option value="crime">Crime</option>
                <option value="documentary">Documentary</option>
                <option value="horror">Horror</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="romance">Romance</option>
              </select>
              {errors.genres && <p className="error-text">{errors.genres.message}</p>}
            </div>

            <div className="col-md-6">
              <label htmlFor="runtime" className="form-label">RUNTIME</label>
              <input
                type="number"
                className="form-control"
                id="runtime"
                {...register("runtime", {
                  required: "Runtime is required",
                  min: { value: 1, message: "Must be at least 1 minute" },
                })}
              />
              {errors.runtime && <p className="error-text">{errors.runtime.message}</p>}
            </div>
          </div>

          {/* Overview */}
          <div className="overview-section">
            <label htmlFor="text-area" className="form-label">OVERVIEW</label>
            <textarea
              className="form-control"
              id="text-area"
              {...register("overview", { required: "Overview is required" })}
            ></textarea>
            {errors.overview && <p className="error-text">{errors.overview.message}</p>}
          </div>

          {/* Buttons */}
          <div className="d-flex modal-buttons">
            <button type="button" onClick={handleReset} className="add-movie-buttons">RESET</button>
            <button type="submit" className="add-movie-buttons">SUBMIT</button>
            <button type="button" onClick={handleClose} className="add-movie-buttons">CLOSE</button>
          </div>
        </form>

        {/* Show success modal when submit is successful */}
        {isSubmitSuccessful &&
          createPortal(<MovieSuccessModal />, document.getElementById("add-movie-modal"))
        }
      </div>
    </div>
  );
}

export default AddMovieModal;

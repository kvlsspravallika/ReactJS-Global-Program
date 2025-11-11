import React, { useEffect } from "react";
import "./EditMovieModal.css";
import { useNavigate, useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";

function EditMovieModal() {
  const urlToEditMovie = "http://localhost:4000/movies";
  const navigate = useNavigate();
  const movieToEdit = useLoaderData();

  // Initialize form with default values
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
      id: null,
    },
  });

  // When movieToEdit is loaded, populate form fields
  useEffect(() => {
    if (movieToEdit) {
      reset({
        title: movieToEdit.title || "",
        release_date: movieToEdit.release_date || "",
        poster_path: movieToEdit.poster_path || "",
        vote_average: movieToEdit.vote_average || "",
        runtime: movieToEdit.runtime || "",
        overview: movieToEdit.overview || "",
        genres: movieToEdit.genres || [],
        id: movieToEdit.id || null,
      });
    }
  }, [movieToEdit, reset]);

  const handleClose = () => navigate("/");

  const onSubmit = async (data) => {
    const movieToUpdate = {
      ...data,
      vote_average: parseInt(data.vote_average, 10),
      runtime: parseInt(data.runtime, 10),
    };

    try {
      const res = await fetch(`${urlToEditMovie}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movieToUpdate),
      });
      const updatedMovie = await res.json();
      console.log("Updated:", updatedMovie);
      navigate(`/${movieToUpdate.id}`);
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  const handleReset = () => reset();

  return (
    <div className="modal-overlay" id="add-movie-modal">
      <div className="modal-content">
        <h1 id="add-movie-header">EDIT MOVIE</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Title & Release Date */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="title" className="form-label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                placeholder="Enter Title"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && (
                <p className="text-danger">{errors.title.message}</p>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="release-date" className="form-label">
                RELEASE DATE
              </label>
              <input
                type="date"
                id="release-date"
                className="form-control"
                {...register("release_date", {
                  required: "Release date is required",
                })}
              />
              {errors.release_date && (
                <p className="text-danger">{errors.release_date.message}</p>
              )}
            </div>
          </div>

          {/* Poster & Rating */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="poster-path" className="form-label">
                MOVIE POSTER PATH
              </label>
              <input
                type="text"
                id="poster-path"
                className="form-control"
                {...register("poster_path", {
                  required: "Poster path is required",
                })}
              />
              {errors.poster_path && (
                <p className="text-danger">{errors.poster_path.message}</p>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="rating" className="form-label">
                RATING
              </label>
              <input
                type="number"
                id="rating"
                className="form-control"
                {...register("vote_average", {
                  required: "Rating is required",
                  min: { value: 0, message: "Rating must be >= 0" },
                  max: { value: 10, message: "Rating must be <= 10" },
                })}
              />
              {errors.vote_average && (
                <p className="text-danger">{errors.vote_average.message}</p>
              )}
            </div>
          </div>

          {/* Genre & Runtime */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="genre" className="form-label">
                GENRE
              </label>
              <select
                id="genre"
                className="form-select form-select-lg mb-3"
                multiple
                {...register("genres", { required: "Select at least one genre" })}
              >
                <option value="crime">Crime</option>
                <option value="documentary">Documentary</option>
                <option value="horror">Horror</option>
                <option value="comedy">Comedy</option>
              </select>
              {errors.genres && (
                <p className="text-danger">{errors.genres.message}</p>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="runtime" className="form-label">
                RUNTIME
              </label>
              <input
                type="number"
                id="runtime"
                className="form-control"
                {...register("runtime", {
                  required: "Runtime is required",
                  min: { value: 1, message: "Runtime must be positive" },
                })}
              />
              {errors.runtime && (
                <p className="text-danger">{errors.runtime.message}</p>
              )}
            </div>
          </div>

          {/* Overview */}
          <div className="overview-section">
            <label htmlFor="text-area" className="form-label">
              OVERVIEW
            </label>
            <textarea
              id="text-area"
              className="form-control"
              {...register("overview", {
                required: "Overview is required",
              })}
            ></textarea>
            {errors.overview && (
              <p className="text-danger">{errors.overview.message}</p>
            )}
          </div>

          <div className="d-flex modal-buttons">
            <button
              type="button"
              onClick={handleReset}
              className="add-movie-buttons"
            >
              RESET
            </button>
            <button type="submit" className="add-movie-buttons">
              SUBMIT
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="add-movie-buttons"
            >
              CLOSE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditMovieModal;

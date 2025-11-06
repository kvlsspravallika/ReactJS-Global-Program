import React from "react";
import './AddMovieModal.css';
import {useNavigate} from "react-router-dom";

function DeleteMovieModal({ handleCloseModal, movieToDelete}) {
    const urlToDeleteMovie = "http://localhost:4000/movies";
    const [movieDeleteSuccessfully, setMovieDeleteSuccessfully] = React.useState(false);
    const id = movieToDelete.id;
    const navigate = useNavigate();

    const handleConfirm = async () => {
        try {
            const requestOptions = {
                method: 'DELETE',
            };
            const response = await fetch(`${urlToDeleteMovie}/${id}`, requestOptions);

            if (response.ok) {
                console.log('Item deleted successfully');
                setMovieDeleteSuccessfully(true);
                navigate('/');
                window.location.reload();
            } else {
                console.error('Failed to delete item');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div className="modal-overlay" id="add-movie-modal">
            <div className="modal-content">
                <h1 id="add-movie-header">DELETE MOVIE</h1>
                <h3> Do you really want to delete the movie?</h3>
                <div className="d-flex modal-buttons">
                    <button type="button" onClick={handleConfirm} className="add-movie-buttons">CONFIRM</button>
                    <button type="button" onClick={handleCloseModal} className="add-movie-buttons">CLOSE</button>
                </div>
            </div>
        </div>
 );
}

export default DeleteMovieModal;

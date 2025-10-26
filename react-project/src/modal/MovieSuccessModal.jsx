import {useState} from "react";

function MovieSuccessModal({handleCloseModal}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <div className="modal fade show d-block" tabIndex="-1" aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-dark text-white text-center p-4 position-relative">
                    {/* Close button */}
                    <button
                        type="button"
                        className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                        onClick={handleCloseModal}
                        aria-label="Close"
                    ></button>

                    {/* Checkmark icon */}
                    <div className="mb-3">
                        <div
                            className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center"
                            style={{ width: "50px", height: "50px" }}
                        >
                            <i className="bi bi-check-lg text-white fs-4"></i>
                        </div>
                    </div>

                    {/* Header */}
                    <h4 className="fw-bold mb-2">CONGRATULATIONS!</h4>

                    {/* Message */}
                    <p>The movie has been added to the database successfully</p>
                </div>
            </div>
        </div>
    );
}

export default MovieSuccessModal;

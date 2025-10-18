import './AddMovieModal.css'
function AddMovieModal() {

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h1 id="add-movie-header"> ADD MOVIE </h1>
                <form>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">TITLE</label>
                            <input type="text" className="form-control" id="title" placeholder="Enter Title"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">RELEASE DATE</label>
                            <input type="date" className="form-control" id="release-date" placeholder="Select Date"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">MOVIE URL</label>
                            <input type="email" className="form-control" id="movie-url"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone" className="form-label">RATING</label>
                            <input type="tel" className="form-control" id="rating"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">GENRE</label>
                            <select className="form-select form-select-lg mb-3" multiple aria-label=".form-select-lg example">
                                <option selected value="crime">Crime</option>
                                <option value="documentary">Documentary</option>
                                <option value="horror">Horror</option>
                                <option value="comedy">Comedy</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone" className="form-label">RUNTIME</label>
                            <input type="tel" className="form-control" id="runtime"/>
                        </div>
                    </div>
                    <div className="overview-section">
                        <label htmlFor="email" className="form-label">OVERVIEW</label>
                        <textarea className="form-control" id={"text-area"}></textarea>
                    </div>
                    <div className="d-flex justify-content-end gap-3">
                        <button type="submit" className="add-movie-buttons">RESET</button>
                        <button type="submit" className="add-movie-buttons" >SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddMovieModal;
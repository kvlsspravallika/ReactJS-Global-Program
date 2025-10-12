import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieTile({selectedMovie, setShowHeaderToTrue}) {

    const handleHomeClick = () => {
        setShowHeaderToTrue();
    }
    return (
        <header className="header d-flex flex-column justify-content-center align-items-center text-white movie-tile-header"
        >
            <div className="brand" onClick={handleHomeClick}>
                <p>
                    <span className="brand-bold">netflix</span>
                    <span className="brand-normal">roulette</span>
                </p>
            </div>

            <div className="col-sm-6 col-md-6 col-xs-6">

                <div className="row" >
                    <div className="col-xs-6">
                        <img id="movie-image-tile" src={selectedMovie.poster_path} />
                    </div>
                    <div className="col-xs-6">
                        <h3>Hello World</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed hendrerit adipiscing blandit. Aliquam placerat, velit a fermentum fermentum, mi
                            felis vehicula justo, a dapibus quam augue non massa.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed hendrerit adipiscing blandit. Aliquam placerat, velit a fermentum fermentum, mi
                            felis vehicula justo, a dapibus quam augue non massa.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed hendrerit adipiscing blandit. Aliquam placerat, velit a fermentum fermentum, mi
                            felis vehicula justo, a dapibus quam augue non massa.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed hendrerit adipiscing blandit. Aliquam placerat, velit a fermentum fermentum, mi
                            felis vehicula justo, a dapibus quam augue non massa.</p>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default MovieTile;
import React from 'react';
import { useParams } from 'react-router-dom';
function MovieTileExample() {

    const { movieId } = useParams();
    return (
        <div className="movie-tile">
            <h2>Movie Title Example</h2>
            <p>This is an example of a movie tile component. Id is {movieId}</p>
        </div>
    );
}

export default MovieTileExample;
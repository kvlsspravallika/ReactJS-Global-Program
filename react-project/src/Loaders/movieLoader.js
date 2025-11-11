export async function movieLoader({ params }) {
    const {movieId} = params;
    const response = await fetch(`http://localhost:4000/movies/${movieId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch movie details');
    }
    const data = await response.json();
    return data;
}
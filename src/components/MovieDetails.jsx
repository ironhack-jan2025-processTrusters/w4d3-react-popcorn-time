import { Link, useParams } from "react-router-dom";

function MovieDetails(props) {

    const { movieId } = useParams();

    const movie = props.moviesArr.find((movieObj) => {
        return movieObj.id === parseInt(movieId);
    });

    return (
        <div className='MovieDetails card'>

            {movie.imgURL && <img src={movie.imgURL} alt="Movie poster" />}

            <h2>{movie.title}</h2>
            <h3>{movie.year}</h3>
            <p>Rating: {movie.rating}</p>

            <p>
                <Link to="/" className="btn btn-primary">Back</Link>
            </p>

        </div>
    );
}

export default MovieDetails
import { Link } from "react-router-dom";

function MovieSummary(props) {
    return (
        <div className="card">
            <p>{props.movieDetails.title}</p>

            { props.movieDetails.imgURL 
                && <img src={props.movieDetails.imgURL} alt={props.movieDetails.title} />
            }

            <p>Rating: {props.movieDetails.rating}</p>

            <div>
                <button onClick={() => { props.callbackToDelete(props.movieDetails.id) }}>
                    Delete this movie
                </button>

                <Link to={`/movies/${props.movieDetails.id}`}>
                    <button className="btn btn-primary">More details</button>
                </Link>
            </div>
        </div>
    );
}

export default MovieSummary;
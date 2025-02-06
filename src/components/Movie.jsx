function Movie(props) {
    return (
        <div className="card">
            <p>{props.movieDetails.title}</p>
            <img src={props.movieDetails.imgURL} alt={props.movieDetails.title} />
            <p>Rating: {props.movieDetails.rating}</p>

            <button onClick={() => { props.callbackToDelete(props.movieDetails.id) }}>
                Delete this movie
            </button>
        </div>

    );
}

export default Movie;
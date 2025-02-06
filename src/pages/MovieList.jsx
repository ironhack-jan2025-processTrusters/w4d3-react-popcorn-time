import MovieSummary from "../components/MovieSummary";
import "./MovieList.css"


function MovieList(props) {
    return (
        <section className="MovieList">

            {props.moviesArr.map((movieObj) => {
                return (
                    <MovieSummary
                        key={movieObj.id}
                        movieDetails={movieObj}
                        callbackToDelete={props.callbackToDelete}
                    />)
            })}
        </section>
    );
}

export default MovieList;
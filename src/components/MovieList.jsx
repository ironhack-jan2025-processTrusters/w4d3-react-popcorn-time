import { useState } from "react";
import Movie from "./Movie";
import movies from "../data/movies.json"
import "./MovieList.css"


function MovieList() {

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    
    const deleteMovie = (movieId) => {
        const newListOfMovies = moviesToDisplay.filter((movie) => {
            return movie.id !== movieId;
        });
        setMoviesToDisplay(newListOfMovies);
    }


    return (
        <section className="MovieList">
            <h2>Number of movies: {moviesToDisplay.length}</h2>

            {moviesToDisplay.map((movieObj) => {
                return (
                    <Movie
                        key={movieObj.id}
                        movieDetails={movieObj}
                        callbackToDelete={deleteMovie}
                    />)
            })}
        </section>
    );
}

export default MovieList;
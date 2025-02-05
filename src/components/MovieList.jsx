import { useState } from "react";
import movies from "../data/movies.json"
import "./MovieList.css"


function MovieList(){

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


    const deleteMovie = (movieId) => {
        const newListOfMovies = moviesToDisplay.filter( (movie) => {
            // if(movie.id !== movieId){
            //     return true;
            // } else {
            //     return false;
            // }
            return movie.id !== movieId;
        });
        setMoviesToDisplay(newListOfMovies);
    }

    
    return (
        <section className="MovieList">

            <h2>Number of movies: {moviesToDisplay.length}</h2>

            {moviesToDisplay.map((movieObj) => {
                return (
                    <div key={movieObj.id} className="card">
                        <p>{movieObj.title}</p>
                        <img src={movieObj.imgURL} alt={movieObj.title} />
                        <p>Rating: {movieObj.rating}</p>

                        <button onClick={() => {deleteMovie(movieObj.id)}}>Delete this movie</button>
                    </div>
                )
            })}
        </section>
    );
}

export default MovieList;
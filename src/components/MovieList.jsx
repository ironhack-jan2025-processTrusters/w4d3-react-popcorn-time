import movies from "../data/movies.json"
import "./MovieList.css"


function MovieList(){

    return (
        <section className="MovieList">

            <h2>List of movies:</h2>

            {movies.map((movieObj) => {
                return (
                    <div key={movieObj.id} className="card">
                        <p>{movieObj.title}</p>
                        <img src={movieObj.imgURL} alt={movieObj.title} />
                        <p>Rating: {movieObj.rating}</p>
                    </div>
                )
            })}
        </section>
    );
}

export default MovieList;
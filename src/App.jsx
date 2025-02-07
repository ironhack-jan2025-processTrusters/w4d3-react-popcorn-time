import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer"
import Header from "./components/Header"
import MovieDetails from "./components/MovieDetails";
import MovieList from "./pages/MovieList"
import About from "./pages/About";
import Contact from "./pages/Contact";

import movies from "./data/movies.json"

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const deleteMovie = (movieId) => {
    const newListOfMovies = moviesToDisplay.filter((movie) => {
      return movie.id !== movieId;
    });
    setMoviesToDisplay(newListOfMovies);
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    const movieIds = moviesToDisplay.map((movie) => movie.id);
    const maxId = Math.max(...movieIds);
    const nextId = maxId + 1;

    const newMovie = {
      id: nextId,
      title: title,
      rating: rating
    }

    const newList = [newMovie, ...moviesToDisplay];

    setMoviesToDisplay(newList);

    // clear form
    setTitle("");
    setRating("");
  }

  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />

      <section className="box">
        <form onSubmit={handleSubmit}>

          <label>
            Title:
            <input
              type="text"
              name="title"
              required={true}
              placeholder="enter the title"
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}
            />
          </label>

          <label>
            Rating:
            <input
              type="number"
              min={1}
              max={10}
              name="rating"
              required={true}
              value={rating}
              onChange={(e) => { setRating(e.target.value) }}
            />
          </label>

          <button>Submit</button>
        </form>
      </section>

      <Routes>
        <Route path="/" element={<MovieList moviesArr={moviesToDisplay} callbackToDelete={deleteMovie} />} />
        <Route path="/movies/:movieId" element={<MovieDetails moviesArr={moviesToDisplay} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<p>Sorry, page not found</p>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

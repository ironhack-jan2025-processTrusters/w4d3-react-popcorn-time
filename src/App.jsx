import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer"
import Header from "./components/Header"
import MovieDetails from "./components/MovieDetails";
import AddMovie from "./components/AddMovie";
import MovieList from "./pages/MovieList"
import About from "./pages/About";
import Contact from "./pages/Contact";

import movies from "./data/movies.json"

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  // delete movie
  const deleteMovie = (movieId) => {
    const newListOfMovies = moviesToDisplay.filter((movie) => {
      return movie.id !== movieId;
    });
    setMoviesToDisplay(newListOfMovies);
  }


  // create movie
  const createMovie = (movieDetails) => {

    const movieIds = moviesToDisplay.map((movie) => movie.id);
    const maxId = Math.max(...movieIds);
    const nextId = maxId + 1;

    const newMovie = {
      ...movieDetails,
      id: nextId
    }

    const newList = [newMovie, ...moviesToDisplay];

    setMoviesToDisplay(newList);
  }


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />

      <AddMovie callbackToCreate={createMovie} />

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

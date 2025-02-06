import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer"
import Header from "./components/Header"
import MovieList from "./pages/MovieList"
import About from "./pages/About";
import Contact from "./pages/Contact";

import movies from "./data/movies.json"

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    const newListOfMovies = moviesToDisplay.filter((movie) => {
      return movie.id !== movieId;
    });
    setMoviesToDisplay(newListOfMovies);
  }

  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />
      <Routes>
        <Route path="/" element={<MovieList moviesArr={moviesToDisplay} callbackToDelete={deleteMovie} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

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

  const deleteMovie = (movieId) => {
    const newListOfMovies = moviesToDisplay.filter((movie) => {
      return movie.id !== movieId;
    });
    setMoviesToDisplay(newListOfMovies);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newMovie = {
      title: title
    }

    const newList = [newMovie, ...moviesToDisplay];

    setMoviesToDisplay(newList);

    // clear form
    setTitle("");
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
              placeholder="enter the title" 
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}
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

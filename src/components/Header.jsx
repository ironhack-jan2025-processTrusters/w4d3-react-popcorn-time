import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(props) {
    return (
        <header className="Header">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            <h1>Welcome to Popcorn Time!</h1>
            <h2>Number of movies: {props.numberOfMovies}</h2>
        </header>
    );
}

export default Header;
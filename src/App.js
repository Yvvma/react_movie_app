import { useEffect, useState } from 'react';

import MovieCard from './MovieCard';
// bd03b12e - api key

import './App.css'; // import css
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com?apikey=bd03b12e';


const App = () => {

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    /*const handleKeyPress = (e) => {
         if (e.key === 'Enter') {
           searchMovie();
         }
       };*/

    useEffect(() => {
        searchMovie('Batman');
    }, []);

    return (
        <div className="app">
            <h1>MovieCard</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovie(searchTerm)}
                />
            </div>
            {
                movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            };

        </div>
    );
}

export default App;
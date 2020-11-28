import { useContext } from 'react';

import { MoviesContext } from './components/contexts/MoviesContext';

import Movie from './components/Movie';
import Header from './components/Header';

const App = () => {
    const { movies } = useContext(MoviesContext);

    const mapMovies = () =>
        movies.map((movie) => <Movie key={movie.id} {...movie} />);

    return (
        <div className='app'>
            <Header />
            <main className='movies'>{movies && mapMovies()}</main>
        </div>
    );
};

// @import './layout/movies';
export default App;

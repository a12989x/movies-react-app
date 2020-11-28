import { useState, useEffect, createContext } from 'react';

import { FEATURED_API, SEARCH_API } from '../../api';

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
    const [movies, setMovies] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        getMovies(FEATURED_API);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (search) getMovies(SEARCH_API + search);
    };

    const getMovies = async (API) => {
        const res = await fetch(API);
        const movies = await res.json();

        setMovies(movies.results);
    };

    return (
        <MoviesContext.Provider
            value={{ movies, search, setSearch, handleSubmit }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;

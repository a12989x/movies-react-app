import { useState, useEffect, createContext } from 'react';

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    return (
        <MoviesContext.Provider value={{ movies }}>
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;

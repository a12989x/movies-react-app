import React from 'react';
import ReactDOM from 'react-dom';

import MoviesContextProvider from './components/contexts/MoviesContext';

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <MoviesContextProvider>
            <App />
        </MoviesContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

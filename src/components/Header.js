import { useContext } from 'react';

import { MoviesContext } from './contexts/MoviesContext';

const Header = () => {
    const { search, setSearch, handleSubmit } = useContext(MoviesContext);

    return (
        <header className='header'>
            <h1 className='header__title'>Movies App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Search...'
                    className='header__search'
                    type='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </header>
    );
};

export default Header;

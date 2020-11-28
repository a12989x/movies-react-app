import { IMG_API } from '../api';

import NotFoundImg from '../img/not-found.jpg';

const Movie = ({ poster_path, title, vote_average, overview }) => {
    const setVoteClass = (vote) => {
        if (vote >= 8) return 'green';
        else if (vote >= 6) return 'orange';
        else return 'red';
    };

    return (
        <section className='movie'>
            <img
                src={poster_path ? IMG_API + poster_path : NotFoundImg}
                alt={title}
            />
            <div className='movie__info'>
                <h3>{title}</h3>
                <span
                    className={`movie__average movie__average-${setVoteClass(
                        vote_average
                    )}`}
                >
                    {vote_average}
                </span>
            </div>

            <div className='movie__overview'>
                <h4>Overview:</h4>
                <p>{overview}</p>
            </div>
        </section>
    );
};

export default Movie;

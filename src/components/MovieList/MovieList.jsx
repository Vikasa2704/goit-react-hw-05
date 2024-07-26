import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <ul className={s.container}>
      {movies.map(movie => (
        <li key={movie.id} className={s.cardWrapper}>
          <Link to={`/movies/${movie.id}`} state={{ from: location.pathname }}>
            <img
              className={s.movieImg}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.original_title}
            />
            <h3 className={s.movieName}>{movie.original_title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
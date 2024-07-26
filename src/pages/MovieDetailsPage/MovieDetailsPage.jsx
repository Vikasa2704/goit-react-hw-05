import { Suspense, useEffect, useRef, useState } from "react";
import { useParams, Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getMovieById } from "../../api/movies-api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const previousLocation = useRef(location.state?.from || '/movies');

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [movieId]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage />;

  return (
    <div>
      <button
        className={s.backBtn}
        type="button"
        onClick={() => navigate(previousLocation.current)}
      >
        Go back
      </button>
      {movie && (
        <div>
          <div>
            <h1 className={s.titleWrapper}>{movie.original_title}</h1>
          </div>
          <div className={s.imgWrapper}>
            {movie.poster_path ? (
              <img
                className={s.imgMovie}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
              />
            ) : (
              <div className={s.noImage}>No Image Available</div>
            )}
            <p className={s.movieDescr}>{movie.overview}</p>
          </div>
        </div>
      )}
      <ul className={s.navBarCastReviews}>
        <li>
          <Link
            className={s.linkNavBar}
            to="cast"
            state={{ from: previousLocation.current }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            className={s.linkNavBar}
            to="reviews"
            state={{ from: previousLocation.current }}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;

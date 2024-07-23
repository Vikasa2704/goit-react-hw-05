import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetailsById } from "../../api/movies-api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMovieDetailsById(movieId);
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
      <h1>MovieDetailsPage: {movieId}</h1>
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;

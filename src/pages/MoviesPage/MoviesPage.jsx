import { useEffect, useState } from "react";
import getMovies from "../../api/movies-api";
import MovieList from "../../components/MovieList/MovieList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
};

export default MoviesPage;

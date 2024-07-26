import { useEffect, useState } from "react";
import { getMovieByQuery } from "../../api/movies-api";
import MovieList from "../../components/MovieList/MovieList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [params, setParams] = useSearchParams();
  const searchFilter = params.get('search') ?? "";

  useEffect(() => {
    if (!searchFilter) return;

    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMovieByQuery(searchFilter);
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [searchFilter]);

  const handleSearch = (query) => {
    setParams({ search: query });
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        !isLoading && !error && <p>No movies found.</p>
      )}
    </div>
  );
};

export default MoviesPage;

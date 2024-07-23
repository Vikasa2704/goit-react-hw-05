import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img src={movie.poster_path} alt={movie.title} />
      <Link to={`/movies/${movie.id}`}>Details</Link>
    </div>
  );
};

export default MovieCard;

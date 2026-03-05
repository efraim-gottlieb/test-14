import { useParams, useNavigate } from "react-router";
import useMovies from "../store/movies";
function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { movies } = useMovies();

  const movie = movies.find((m) => m.imdbID == id);
  const openCard = () => {

    navigate(`/movie/seats/${movie.imdbID}`);
  };

  return (
    <div className="movie-details-page">
      <h1>{movie.Title}</h1>
      <img src={movie.Images[0]} alt={movie.Title} />
      <button onClick={openCard}>seats</button>
    </div>
  );
}

export default Details;

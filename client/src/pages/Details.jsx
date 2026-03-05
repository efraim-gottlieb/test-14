import { useParams } from "react-router";
import useMovies from "../store/movies";
function Details() {


  const { id } = useParams();
  const { movies } = useMovies();

  const movie = movies.find(m => m.imdbID == id);


  return (
    <div className="movie-details-page">
      <h1>{movie.Title}</h1>
      <img src={movie.Images[0]} alt={movie.Title} />
    </div>
  );
}


export default Details

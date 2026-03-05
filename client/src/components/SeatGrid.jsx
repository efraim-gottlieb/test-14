import { useParams } from "react-router";
import useMovies from "../store/movies";

function SeatGrid() {
  const { id } = useParams();
  const { movies } = useMovies();

  const movie = movies.find((m) => m.imdbID == id);
  console.log(movie.seats);
  return (
    <div className="seats">
      {movie.seats.map((s) => {
        return JSON.stringify(s);
      })}
    </div>
  );
}

export default SeatGrid;

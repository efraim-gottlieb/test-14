import { useParams } from "react-router";
import useMovies from "../store/movies";

function Seats() {
  const { id } = useParams();
  const { movies , updateMovieSeat} = useMovies();

  const movie = movies.find((m) => m.imdbID == id);
  console.log(movie.seats);
  return (
    <div className="seats">
      {movie.seats.map((s) => {
        return (
          <div className="seat" onClick={()=>{updateMovieSeat(movie.imdbID, s.id)}} style={{ backgroundColor: !s.isTaken ? 'green' : 'red' }}>
              {JSON.stringify(s)}
          </div>
        )
      })}
    </div>
  );
}
export default Seats

import "./movieCard.css";
import { useNavigate } from "react-router";
function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { Title, imdbID, Images } = movie;

  const openCard = () => {
    navigate(`/movie/${imdbID}`);
  };

  return (
    <div className="movie-card" onClick={openCard}>
      <img src={Images[0]} alt={Title} />
      <h3>{Title}</h3>
    </div>
  );
}
export default MovieCard;

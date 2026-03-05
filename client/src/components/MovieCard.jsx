import "./movieCard.css";
import { useNavigate } from "react-router";
function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { Title, imdbID, Images, Genre } = movie;

  const openCard = () => {
    navigate(`/movie/${imdbID}`);
  };

  return (
    <div className="movie-card" onClick={openCard}>
      <img src={Images[0]} alt={Title} />
      <h3>{Title}</h3>
      <p>Genere: {Genre}</p>
    </div>
  );
}
export default MovieCard;

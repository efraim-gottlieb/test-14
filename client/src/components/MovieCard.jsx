import "./movieCard.css"

function MovieCard(props) {
  const {Title, Year, imdbID, Poster} = props.movie
  return (
    <div className="movie-card">
      {Title}
      <img src={Poster} alt="poster" />
    </div>
  )
}
export default MovieCard

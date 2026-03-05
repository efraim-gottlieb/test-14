import "./home.css";
import SearchBar from "../components/SearchBar";
import useMovies from "../store/movies";
import MovieCard from "../components/MovieCard";
import { useEffect , useState} from "react";


function Home() {
  const { movies, fetchMovies, updateMovieSeat } = useMovies();

  const [data, setData] = useState([])
  const [DATA, setDATA] = useState([])
  
  useEffect(() => {
    fetchMovies();
  }, []);
  
  useEffect(() => {
    setData(movies);
    setDATA(movies)
}, [movies]); 

  return (
    <div className="main">
      <SearchBar filter={{setData, DATA}}/>
      <div className="movies">{data.map((m, key) => <MovieCard key={key} movie={m}/>)}</div>
    </div>
  );
}

export default Home;

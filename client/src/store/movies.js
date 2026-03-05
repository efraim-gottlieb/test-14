import { create } from "zustand";
import { fetchData } from "../api/fetchData";

const useMovies = create((set) => ({
  movies: [],

  fetchMovies: async () => {
    const movies = await fetchData();
    set({ movies });
  },

  updateMovieSeat: (movieId, seatId) =>
    set((state) => ({
      movies: state.movies.map((movie) =>
        movie.imdbID == movieId
          ? {
              ...movie,
              seats: movie.seats.map((seat) =>
                seat.id == seatId ? { ...seat, isTaken: !seat.isTaken } : seat,
              ),
            }
          : movie,
      ),
    })),
}));

export default useMovies;

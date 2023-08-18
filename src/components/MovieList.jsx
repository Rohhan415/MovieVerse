import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";

function MovieList({ IMAGE_PATH, selectMovie, movies }) {
  const renderMovies = () =>
    movies.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        IMAGE_PATH={IMAGE_PATH}
        selectMovie={selectMovie}
      />
    ));

  return <div className={styles.movieList}>{renderMovies()}</div>;
}

export default MovieList;

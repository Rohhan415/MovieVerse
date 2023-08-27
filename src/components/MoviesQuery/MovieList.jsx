import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";

function MovieList({ POSTER_PATH, selectOneMovie, movies, handleClickOpen }) {
  const renderMovies = () =>
    movies.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        POSTER_PATH={POSTER_PATH}
        selectOneMovie={selectOneMovie}
        handleClickOpen={handleClickOpen}
      />
    ));

  return <div className={styles.movieList}>{renderMovies()}</div>;
}

export default MovieList;

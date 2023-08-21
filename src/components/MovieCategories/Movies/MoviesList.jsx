import Movie from "./Movies";
import styles from "./MoviesList.module.css";

function MoviesList({ popularMovies, POSTER_PATH }) {
  return (
    <>
      <ul className={styles.carouselContainer}>
        {popularMovies?.map((movies) => (
          <Movie key={movies.id} movies={movies} POSTER_PATH={POSTER_PATH} />
        ))}
      </ul>
    </>
  );
}

export default MoviesList;

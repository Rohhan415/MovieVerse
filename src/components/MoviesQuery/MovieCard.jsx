import styles from "./MovieCard.module.css";
const MovieCard = ({ movie, POSTER_PATH, selectOneMovie, handleClickOpen }) => {
  return (
    <li className={styles.movieCard}>
      {movie.poster_path ? (
        <img
          className={styles.movieCover}
          src={`${POSTER_PATH}${movie.poster_path}`}
          alt=""
          onClick={() => {
            handleClickOpen();
            selectOneMovie(movie);
          }}
        />
      ) : (
        <div className={styles.moviePlaceHolder}>No Image found</div>
      )}
      <section className={styles.briefDetails}>
        <h5 className={styles.movieTitle}>{movie.title}</h5>
        <p className={styles.moviesRating}>
          Rating:{`${`${" "}`}`}
          {movie.vote_average.toFixed(1)}
          <span className={styles.moviesStar}>⭐</span>
        </p>
      </section>
    </li>
  );
};

export default MovieCard;

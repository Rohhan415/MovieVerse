import styles from "./Movies.module.css";

function Movie({ POSTER_PATH, movies }) {
  return (
    <li className={styles.poster}>
      <img
        loading="lazy"
        className={styles.seriesPoster}
        src={`${POSTER_PATH}${movies.poster_path}`}
      />
      <h2 className={styles.seriesName}> {movies.title}</h2>
      <p className={styles.airDate}>Release date:{movies.release_date}</p>
    </li>
  );
}

export default Movie;

import styles from "./MovieFeatured.module.css";

function MovieFeatured({ selectedMovie, IMAGE_PATH }) {
  return (
    <div
      className={styles.featuredMovie}
      style={{
        backgroundImage: `url('${IMAGE_PATH}${selectedMovie.backdrop_path}')`,
      }}
    >
      <div className={(styles.featuredContent, styles.maxCenter)}>
        <button className={styles.featuredButton}>Play</button>
        <h1 className={styles.featuredTitle}>{selectedMovie.title}</h1>
        {selectedMovie.overview ? (
          <p className={styles.featuredOverview}>{selectedMovie.overview} </p>
        ) : null}
      </div>
    </div>
  );
}

export default MovieFeatured;

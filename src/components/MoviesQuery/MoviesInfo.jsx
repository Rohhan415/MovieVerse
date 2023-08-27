import styles from "./MoviesInfo.module.css";
function MoviesInfo({
  selectedMovies,
  activeInfoTab,
  handleClickClose,
  IMAGE_PATH,
}) {
  return (
    <aside
      className={`${styles.seriesInfo} ${activeInfoTab ? "" : styles.hidden}`}
    >
      <div className={styles.outer}></div>
      <button
        className={styles.button}
        onClick={() => handleClickClose()}
      ></button>
      <h2 className={styles.seriesTitle}> {selectedMovies.title}</h2>
      <img
        src={`${IMAGE_PATH}${selectedMovies.backdrop_path}`}
        alt=""
        className={styles.seriesImage}
      />
      <p className={styles.seriesOverview}>{selectedMovies.overview}</p>

      <span className={styles.seriesDate}>
        Release date: {selectedMovies.release_date}
      </span>
      <div className={styles.seriesData}>
        <span className={styles.seriesVotes}>
          {`average rating: ${selectedMovies.vote_average?.toFixed(1)}⭐ 
         `}
        </span>
        <span className={styles.seriesVotes}>
          {" "}
          votes: {selectedMovies.vote_count}📚
        </span>
      </div>
      <span className={styles.seriesSeasons}>
        Original language: {selectedMovies.original_language?.toUpperCase()}
      </span>
      <span className={styles.seriesSeasons}>
        Duration: {selectedMovies.runtime} minutes
      </span>
    </aside>
  );
}

export default MoviesInfo;

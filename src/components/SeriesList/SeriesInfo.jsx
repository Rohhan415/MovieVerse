import styles from "./SeriesInfo.module.css";
function SeriesInfo({
  selectedSeries,
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
      <h2 className={styles.seriesTitle}> {selectedSeries.name}</h2>
      <img
        src={`${IMAGE_PATH}${selectedSeries.backdrop_path}`}
        alt=""
        className={styles.seriesImage}
      />
      <p className={styles.seriesOverview}>{selectedSeries.overview}</p>

      <span className={styles.seriesDate}>
        First air date: {selectedSeries.first_air_date}
      </span>
      <div className={styles.seriesData}>
        <span className={styles.seriesVotes}>
          {`average rating: ${selectedSeries.vote_average?.toFixed(1)}⭐ 
         `}
        </span>
        <span className={styles.seriesVotes}>
          {" "}
          votes: {selectedSeries.vote_count}📚
        </span>
      </div>
      <span className={styles.seriesSeasons}>
        number of seasons: {selectedSeries.number_of_seasons}
      </span>
      <span className={styles.seriesSeasons}>
        number of episodes: {selectedSeries.number_of_episodes}
      </span>
    </aside>
  );
}

export default SeriesInfo;

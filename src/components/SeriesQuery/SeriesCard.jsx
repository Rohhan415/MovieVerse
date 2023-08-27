import styles from "./SeriesCard.module.css";

function SeriesCard({ series, POSTER_PATH, selectSeries, handleClickOpen }) {
  return (
    <li className={styles.seriesCard}>
      {series.poster_path ? (
        <img
          className={styles.seriesCover}
          src={`${POSTER_PATH}${series.poster_path}`}
          alt=""
          onClick={() => {
            handleClickOpen();
            selectSeries(series);
          }}
        />
      ) : (
        <div className={styles.seriesPlaceHolder}>
          No Image found {`${":("}`}
        </div>
      )}
      <section className={styles.briefDetails}>
        <h5 className={styles.seriesName}>{series.name}</h5>
        <p className={styles.seriesRating}>
          Rating:{`${`${" "}`}`}
          {series.vote_average.toFixed(1)}
          <span className={styles.seriesStar}>⭐</span>
        </p>
      </section>
    </li>
  );
}

export default SeriesCard;

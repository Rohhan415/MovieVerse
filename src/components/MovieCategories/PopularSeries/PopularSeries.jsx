import styles from "./PopularSeries.module.css";

function PopularSeries({ POSTER_PATH, series }) {
  return (
    <li className={styles.poster}>
      <img
        className={styles.seriesPoster}
        src={`${POSTER_PATH}${series.poster_path}`}
        alt=""
      />
      <h2 className={styles.seriesName}> {series.name}</h2>
      <p className={styles.airDate}>First episode:{series.first_air_date}</p>
    </li>
  );
}

export default PopularSeries;

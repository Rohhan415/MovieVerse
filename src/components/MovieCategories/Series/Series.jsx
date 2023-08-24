import styles from "./Series.module.css";

function PopularSeries({ POSTER_PATH, series }) {
  return (
    <li className={styles.poster}>
      <img
        loading="lazy"
        className={styles.seriesPoster}
        src={`${POSTER_PATH}${series.poster_path}`}
      />
      <h2 className={styles.seriesName}> {series.name}</h2>
      <p className={styles.airDate}>First episode:{series.first_air_date}</p>
    </li>
  );
}

export default PopularSeries;

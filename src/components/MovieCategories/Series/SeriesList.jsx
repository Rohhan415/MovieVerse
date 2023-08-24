import PopularSeries from "./Series";
import styles from "./SeriesList.module.css";

function PopularSeriesList({ popularSeries, POSTER_PATH, TAB_NAME }) {
  return (
    <>
      <ul key={TAB_NAME} className={styles.carouselContainer}>
        {popularSeries?.map((series) => (
          <PopularSeries
            key={series.id}
            series={series}
            POSTER_PATH={POSTER_PATH}
          />
        ))}
      </ul>
    </>
  );
}

export default PopularSeriesList;

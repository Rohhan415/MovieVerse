import PopularSeries from "./PopularSeries";

import styles from "./PopularSeriesList.module.css";

function PopularSeriesList({ popularMovies, POSTER_PATH }) {
  return (
    <>
      <ul className={styles.carouselContainer}>
        {popularMovies?.map((series) => (
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

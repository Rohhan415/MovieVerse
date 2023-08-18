import PopularSeries from "./PopularSeries";

import styles from "./PopularSeriesList.module.css";

function PopularMoviesList({ popularMovies, POSTER_PATH }) {
  return (
    <>
      <h2 className={styles.header}>Popular Series</h2>
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

export default PopularMoviesList;

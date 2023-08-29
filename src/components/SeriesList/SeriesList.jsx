import styles from "./SeriesList.module.css";
import SeriesCard from "./SeriesCard";

function SeriesQuery({ POSTER_PATH, series, selectSeries, handleClickOpen }) {
  const renderSeries = () =>
    series.map((series) => (
      <SeriesCard
        key={series.id}
        series={series}
        POSTER_PATH={POSTER_PATH}
        selectSeries={selectSeries}
        handleClickOpen={handleClickOpen}
      />
    ));
  return (
    <>
      <div className={styles.boxSeries}>
        <ul className={styles.seriesList}>{renderSeries()}</ul>
      </div>
    </>
  );
}

export default SeriesQuery;

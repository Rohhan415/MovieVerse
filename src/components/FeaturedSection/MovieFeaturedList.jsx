import { useEffect, useState } from "react";
import styles from "./MovieFeaturedList.module.css";

// import YouTube from "react-youtube";

function MovieFeatured({ IMAGE_PATH, seriesType }) {
  const [currentImage, setCurrentImage] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    // Check if seriesType is not empty and contains data
    if (seriesType.length > 0) {
      // Assuming you want the first series in the seriesType array
      const firstSeries = seriesType[0];

      // Extract the necessary data from the first series
      const { backdrop_path, name } = firstSeries;

      // Update the state variables with the extracted data
      setCurrentImage(backdrop_path);
      setCurrentTitle(name);
    }
  }, [seriesType]);

  const FeaturedMoviesImage = seriesType.map((series) => ({
    backdrop_path: series.backdrop_path,
    name: series.name,
    id: series.id,
  }));

  useEffect(() => {
    const intervalImage = setInterval(() => {
      setCurrentImage(FeaturedMoviesImage[count].backdrop_path);
      setCurrentTitle(FeaturedMoviesImage[count].name);
      setCount((previousCount) => previousCount + 1);
      if (count === 15) setCount(0);
    }, 5000);

    return () => clearInterval(intervalImage);
  }, [FeaturedMoviesImage, count]);

  return (
    <div
      className={styles.featuredMovie}
      style={{
        backgroundImage: `url("${IMAGE_PATH}${currentImage}")`,
        opacity: 1,
      }}
    >
      <div className={styles.movieBanner}></div>
      <div className={(styles.featuredContent, styles.maxCenter)}>
        <h1 style={{ opacity: 1 }} className={styles.featuredTitle}>
          {currentTitle}
        </h1>
      </div>
    </div>
  );
}

export default MovieFeatured;

// const renderTrailer = () => {
//   const trailer = selectedMovie.videos.results.find(
//     (video) => video.name === "Official Trailer"
//   );
//   const key = trailer ? trailer.key : selectedMovie.videos.results[0].key;

//   return (
//     <YouTube
//       videoId={key}
//       containerClassName={styles.youtubeContainer}
//       opts={{
//         width: "100%",
//         height: "100%",
//         playerVars: {
//           autoplay: 1,
//           controls: 0,
//         },
//       }}
//     />
//   );
// };
/* <button onClick={() => setPlayTrailer(false)}>Close</button>
        {selectedMovie.videos && playTrailer ? renderTrailer() : null} */
/* <button
        className={styles.featuredButton}
        onClick={() => setPlayTrailer(true)}
        type="button"
      >
        Play
      </button> */

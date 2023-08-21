import styles from "./MovieFeatured.module.css";
// import YouTube from "react-youtube";

function MovieFeatured({ selectedMovie, IMAGE_PATH }) {
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

  return (
    <div
      className={styles.featuredMovie}
      style={{
        backgroundImage: `url('${IMAGE_PATH}${selectedMovie.backdrop_path}')`,
      }}
    >
      <div className={styles.movieBanner}></div>
      <div className={(styles.featuredContent, styles.maxCenter)}>
        {/* <button onClick={() => setPlayTrailer(false)}>Close</button>
        {selectedMovie.videos && playTrailer ? renderTrailer() : null} */}

        <h1 className={styles.featuredTitle}>{selectedMovie.title}</h1>
      </div>
      {/* <button
        className={styles.featuredButton}
        onClick={() => setPlayTrailer(true)}
        type="button"
      >
        Play
      </button> */}
    </div>
  );
}

export default MovieFeatured;

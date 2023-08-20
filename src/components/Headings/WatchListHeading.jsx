import styles from "./WatchListHeading.module.css"

function WatchListHeading({children}) {
    return (
        <div className={styles.watchListHeading}>
        {children}
      </div>
    );
  }
  
  export default WatchListHeading;
  
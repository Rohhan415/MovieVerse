import styles from "./WatchlistHeader.module.css"

function WatchListHeader({children}) {
    return (
        <div className={styles.watchlistHeader}>
        {children}
      </div>
    );
  }
  
  export default WatchListHeader;
  
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavigationBar() {
  const [scrollWatcher, setScrollWatcher] = useState({ y: 0, lastY: 0 });
  const [showNavigation, setShowNavigation] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollWatcher((prevState) => {
        return {
          y: window.scrollY,
          lastY: prevState.y,
        };
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setShowNavigation(scrollWatcher.y > 100);
    setShowNavigation(scrollWatcher.lastY < scrollWatcher.y);
  }, [scrollWatcher]);

  return (
    <header
      className={
        showNavigation
          ? `${styles.container} ${styles.hideNav}`
          : `${styles.container} `
      }
    >
      <div className={styles.navigationBar}>
        <div className={styles.navLogo}>
          <h1 className={styles.navTitle}>MovieVerse</h1>
          <span className={styles.navText}>Where Stories Come Alive</span>
        </div>

        <ul className={styles.NavList}>
          <li className={styles.navButton}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navButton}>
            <Link to="/movies">Movies</Link>
          </li>
          <li className={styles.navButton}>
            <Link to="/series">Series</Link>
          </li>
          <li className={styles.navButton}>
            <Link to="/actors">Actors</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavigationBar;

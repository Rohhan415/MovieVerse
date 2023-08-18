import { useEffect, useState } from "react";
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
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Series</a>
          </li>
          <li>
            <a href="#">Actors</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavigationBar;

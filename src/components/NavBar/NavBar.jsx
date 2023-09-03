import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavigationBar() {
  const [scrollWatcher, setScrollWatcher] = useState({ y: 0, lastY: 0 });
  const [showNavigation, setShowNavigation] = useState(true);
  const [activeMobileNavBar, setActiveMobileNavBar] = useState(false);

  const toggleOpen = () => {
    setActiveMobileNavBar(!activeMobileNavBar);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 704) {
        setScrollWatcher((prevState) => {
          return {
            y: window.scrollY,
            lastY: prevState.y,
          };
        });
      }
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.3}
          stroke="currentColor"
          className={styles.navButtonMobile}
          onClick={toggleOpen}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <div className={styles.navLogo}>
          <h1 className={styles.navTitle}>MovieVerse</h1>
          <span className={styles.navText}>Where Stories Come Alive</span>
        </div>

        <ul
          className={`${styles.NavList} ${
            activeMobileNavBar ? "" : styles.hidden
          }`}
        >
          <li className={styles.navButton}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navButton}>
            <Link to="/movies">Movies</Link>
          </li>
          <li className={styles.navButton}>
            <Link to="/series">Series</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavigationBar;

import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerText}>
        <div className={styles.footerLinks}>
          <ul className={styles.footerPageList}>
            <h3> Useful Links</h3>
            <li className={styles.footerPageButton}>
              <Link to="/movies">Movies</Link>
            </li>
            <li className={styles.footerPageButton}>
              <Link to="/series">Series</Link>
            </li>
            <li className={styles.footerPageButton}>
              <Link to="/actors">Actors</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerFollow}>
          <h3>Follow us</h3>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        <div className={styles.footerInfo}>
          <h3>Support</h3>
          <a href="#">Contact us</a>
          <a href="#">Our Services</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <p className={styles.footerCopyrights}>
          Copyright © 2023 by MovieVerse, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

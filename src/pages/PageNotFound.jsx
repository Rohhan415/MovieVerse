import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <div className={styles.errorInformation}>
      <h1 className={styles.errorHeader}>Page not found.</h1>
      <p className={styles.errorParagraph}>Error 404</p>
      <p className={styles.errorNumber}></p>
    </div>
  );
}

export default PageNotFound;

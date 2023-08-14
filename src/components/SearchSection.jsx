import styles from "./SearchSection.module.css";

export default function SearchSection({ children }) {
  return <section className={styles.SearchSection}>{children}</section>;
}

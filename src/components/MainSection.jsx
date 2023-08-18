import styles from "./MainSection.module.css";
export default function Main({ children }) {
  return <main className={styles.container}>{children}</main>;
}

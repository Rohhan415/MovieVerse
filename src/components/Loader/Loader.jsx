import styles from "./Loader.module.css";
import ClipLoader from "react-spinners/ClipLoader";

function Loader() {
  return (
    <p className={styles.loader}>
      <ClipLoader color="#d1d0d0" size={80} />
    </p>
  );
}

export default Loader;

import styles from "./SearchBar.module.css";

export default function SearchBar({ searchKey, setSearchKey, fetchMovies }) {
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };
  return (
    <>
      <form className={styles.searchForm} onSubmit={searchMovies}>
        <input
          className={styles.SearchBar}
          type="text"
          placeholder="Search movies..."
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button className={styles.button} type={"submit"}>
          Search
        </button>
      </form>
    </>
  );
}

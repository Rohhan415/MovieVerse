import styles from "./SearchBar.module.css";

export default function SearchBar({ searchKey, setSearchKey, fetchMovies }) {
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  return (
    <>
      <form className={styles.searchForm}>
        <input
          className={styles.SearchBar}
          type="text"
          placeholder="Looking for something specific?"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button
          className={styles.button}
          type={"submit"}
          onSubmit={searchMovies}
        >
          Search
        </button>
      </form>
    </>
  );
}

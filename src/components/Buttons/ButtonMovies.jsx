import styles from "./ButtonMovies.module.css";

function ButtonMovies({
  moviesType,
  selectMovies,
  name,
  id,
  activeButtonMovies,
  handleButton,
}) {
  const handleClick = () => {
    selectMovies(moviesType);
    handleButton(id);
  };

  return (
    <button
      className={
        activeButtonMovies === id
          ? `${styles.buttonActive}`
          : `${styles.multiButton}`
      }
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

export default ButtonMovies;

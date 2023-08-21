import styles from "./ButtonSeries.module.css";

function ButtonSeries({
  seriesType,
  selectSeries,
  name,
  id,
  activeButton,
  handleButton,
}) {
  const handleClick = () => {
    selectSeries(seriesType);
    handleButton(id);
  };

  return (
    <button
      className={
        activeButton === id ? `${styles.buttonActive}` : `${styles.multiButton}`
      }
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

export default ButtonSeries;

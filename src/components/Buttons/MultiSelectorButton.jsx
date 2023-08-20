import styles from "./MultiSelectorButton.module.css"

function MultiSelectorButton({children}) {
    return (
        <div className={styles.multiButtonList}>
        {children}
      </div>
    );
  }
  
  export default MultiSelectorButton;
  
 import styles from "./ButtonList.module.css"
 


function ButtonList({seriesType, selectSeries,name,id,  activeButton ,handleButton}) {
const handleClick = () => {
   handleButton(id)
   selectSeries(seriesType)
}


    return (
       <button className={ activeButton === id ? `${styles.buttonActive}` : `${styles.multiButton }` }
       onClick={handleClick}>
         {name}</button>
    );
  }
  
  export default ButtonList;
  
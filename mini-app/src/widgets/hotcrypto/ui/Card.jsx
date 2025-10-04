import styles from "./Card.module.scss";
import arrowCircleUp from "./icons/arrow-circle-up.svg";

function Card({ text, price, increase, img }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardBlock}>
        <p>{text}</p>
        <h2>{price}</h2>
        <h5>
          <img src={arrowCircleUp} alt="ARUSVG" />
          {increase}
        </h5>
        <img className={styles.tablecd} src={img} alt="img" />
      </div>
    </div>
  );
}

export default Card;

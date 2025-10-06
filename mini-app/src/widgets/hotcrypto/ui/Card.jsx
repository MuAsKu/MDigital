import styles from "./Card.module.scss";
import ArrowCircleUp from "./icons/arrow-circle-up.svg";
import Graph from "./icons/graphcard.svg";

function Card({ text, price, increase }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardBlock}>
        <p>{text}</p>
        <h2>{price}</h2>
        <h5>
          <ArrowCircleUp />
          {increase}
        </h5>
        <Graph className={styles.graphcd} alt="img" />
      </div>
    </div>
  );
}

export default Card;

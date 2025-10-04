import styles from "./widecard.module.scss";
import arrowCircleUp from "../ui/icons/arrow-circle-up.svg";

export default function WideCard({ text, price, increase, img, buttons }) {
  return (
    <div className={styles.wideCard}>
      <div className={styles.topRow}>
        <div>
          <p className={styles.title}>{text}</p>
          <div className={styles.priceBlock}>
            <h2 className={styles.price}>{price}</h2>
            <span className={styles.increase}>
              <img src={arrowCircleUp} alt="" />
              {increase}
            </span>
          </div>

          <div className={styles.priceAndGraph}>
            <div className={styles.buttons}>{buttons}</div>
            <img src={img} alt="" className={styles.graph} />
          </div>
        </div>
      </div>
    </div>
  );
}

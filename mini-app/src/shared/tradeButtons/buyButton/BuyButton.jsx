import buySVG from "./buy.svg";
import styles from "./BuyButton.module.scss";

export default function BuyButton() {
  return (
    <div className={styles.buyButton}>
      <img src={buySVG} alt="buy" /> Buy
    </div>
  );
}

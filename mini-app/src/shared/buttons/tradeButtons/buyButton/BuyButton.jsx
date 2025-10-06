import BuySVG from "./buy.svg";
import styles from "./BuyButton.module.scss";

export default function BuyButton() {
  return (
    <div className={styles.buyButton}>
      <BuySVG /> Buy
    </div>
  );
}

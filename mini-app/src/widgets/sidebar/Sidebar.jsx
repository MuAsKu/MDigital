import Button from "../../shared/button/Button";
import styles from "./Sidebar.module.scss";
import ETHlogo from "./ui/ETHlogo.svg";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.overpanel}>
        <button className={styles.crypto} type="select">
          <img src={ETHlogo} alt="ETHlogo" />
          Ethereum
        </button>

        <li>Dashboard</li>
        <li>Exchange</li>
        <li>Pool</li>
        <li>Farm</li>
        <li>Bridge</li>
        <li>History</li>
        <li>Settings</li>
      </div>
      <Button />
    </div>
  );
};

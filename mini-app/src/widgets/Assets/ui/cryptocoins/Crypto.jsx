import React from "react";
import styles from "./Crypto.module.scss";

function Crypto({ icon, name, price, increase, description }) {
  return (
    <div className={styles.cryptoBlock}>
      <div className={styles.leftBlock}>
        {icon}
        <div className={styles.topBlock}>
          <h3>{name}</h3> <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div className={styles.botBlock}>
        {price}
        <br />
        <p className={styles.increase}>{increase}</p>
      </div>
    </div>
  );
}

export default Crypto;

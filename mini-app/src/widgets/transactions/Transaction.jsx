import React from "react";
import styles from "./Transaction.module.scss";
import PrtP from "../../shared/globalIcons/portfolioPerferomencePNG.png";
import Trash from "./ui/icons/trash.svg";
import Edit from "./ui/icons/edit.svg";

import William from "./ui/icons/William.svg";
import Samuel from "./ui/icons/Samuel.svg";

const Transaction = () => {
  return (
    <div className={styles.transactionContainer}>
      <div className={styles.overTransaction}>
        <div className={styles.overtitleTransaction}>
          <img src={PrtP} alt="Portfolio Performance" />
          Transactions
        </div>
        <div className={styles.selectWrapperTransaction}>
          <select>
            <option>Monthly</option>
            <option>Yearly</option>
            <option>Weekly</option>
          </select>
        </div>
      </div>
      <div className={styles.usersTransation}>
        <William />
        <p>William</p>
        <div className={styles.check}>43,90 Ethereum</div>
        <p>Sun 12 May, 6:19 PM</p>
        <div className={styles.editIcons}>
          <div className={styles.buttons}>
            <Edit />
          </div>
          <div className={styles.buttons}>
            <Trash />
          </div>
        </div>
      </div>
      <div className={styles.usersTransation}>
        <Samuel />
        <p>Samuel</p>
        <div className={styles.check}>12,90 Ethereum</div>
        <p>Sun 12 May, 6:19 PM</p>
        <div className={styles.editIcons}>
          <div className={styles.buttons}>
            <Edit />
          </div>
          <div className={styles.buttons}>
            <Trash />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;

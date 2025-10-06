import Assets from "../../widgets/Assets/Assets";
import CustomBtn from "../../widgets/customize/CustomBtn";
import Hotcrypto from "../../widgets/hotcrypto/Hotcrypto";
import Overview from "../../widgets/overview/Overview";
import PortfolioPerferomence from "../../widgets/portfolioPerferomence/PortfolioPerferomence";
import { Sidebar } from "../../widgets/sidebar/Sidebar";
import Transaction from "../../widgets/transactions/Transaction";

import styles from "./DashboardPage.module.scss";

export const DashboardPage = () => {
  return (
    <div>
      <div className={styles.overview}>
        <Overview />
      </div>
      <div className={styles.dashboard}>
        <Sidebar />

        <main className={styles.main}>
          <CustomBtn />
          <Hotcrypto />
          <PortfolioPerferomence />
        </main>

        <Assets />

        <aside className={styles.aside}>
          <Transaction />
        </aside>
      </div>
    </div>
  );
};

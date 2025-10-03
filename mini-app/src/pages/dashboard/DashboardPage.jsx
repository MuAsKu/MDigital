import CustomBtn from "../../widgets/customize/CustomBtn";
import Hotcrypto from "../../widgets/hotcrypto/Hotcrypto";
import Overview from "../../widgets/overview/Overview";
import { Sidebar } from "../../widgets/sidebar/Sidebar";

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
        </main>

        {/* <aside className={styles.aside}></aside> */}
      </div>
    </div>
  );
};

import Button from "../../shared/buttons/button/Button";
import styles from "./Sidebar.module.scss";

import ETHlogo from "./ui/svg/ETHlogo.svg";
import DashboardIcon from "./ui/svg/dashboard.svg";
import GraphIcon from "./ui/svg/graph.svg";
import HistoryIcon from "./ui/svg/history.svg";
import SendIcon from "./ui/svg/send.svg";
import SettingIcon from "./ui/svg/settings.svg";
import StickynoteIcon from "./ui/svg/stickynote.svg";

const menuItems = [
  { name: "Dashboard", icon: <DashboardIcon /> },
  { name: "Exchange", icon: <SendIcon /> },
  { name: "Pool", icon: <GraphIcon /> },
  { name: "Farm", icon: <StickynoteIcon /> },
  { name: "Bridge", icon: <GraphIcon /> },
  { name: "History", icon: <HistoryIcon /> },
  { name: "Settings", icon: <SettingIcon /> },
];

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.overpanel}>
        <button className={styles.crypto} type="button">
          <ETHlogo />
          Ethereum
        </button>

        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li key={item.name} className={styles.menuItem}>
              <span className={styles.icon}>{item.icon}</span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button />
    </div>
  );
};

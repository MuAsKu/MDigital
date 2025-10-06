import React from "react";
import styles from "./Overview.module.scss";
import LogoSVG from "./ui/logo.svg";
import ToggleMenuSVG from "./ui/toggle-menu.svg";
import FlagSVG from "./ui/flag.svg";
import NoticSVG from "./ui/notification.svg";
import UserImgSvg from "./ui/usersImg.svg";

export default function Overview() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <LogoSVG />
        <p>Zapper</p>
      </div>

      <ToggleMenuSVG className={styles.menu} />
      <input type="text" placeholder="Search token, value" />

      <div className={styles.profile}>
        <div className={styles.lang}>
          <FlagSVG />
          <p>USD</p>
          <p className={styles.arrow}>^</p>
        </div>

        <NoticSVG />
        <UserImgSvg />
        <p className={styles.arrow}>^</p>
      </div>
    </div>
  );
}

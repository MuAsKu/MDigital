import React from "react";
import styles from "./Overview.module.scss";
import logoSVG from "./ui/logo.svg";
import toggleMenuSVG from "./ui/toggle-menu.svg";
import flagSVG from "./ui/flag.svg";
import noticSVG from "./ui/notification.svg";
import userImgSvg from "./ui/usersImg.svg";

export default function Overview() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logoSVG} alt="logoSVG" />
        <p>Zapper</p>
      </div>

      <img src={toggleMenuSVG} alt="menuSVG" />
      <input type="text" placeholder="Search token, value" />

      <div className={styles.profile}>
        <div className={styles.lang}>
          <img src={flagSVG} alt="flagSVG" />
          <p>USD</p>
          <p className={styles.arrow}>^</p>
        </div>

        <img src={noticSVG} alt="nocitSVG" />
        <img src={userImgSvg} alt="userImgSVG" />
        <p className={styles.arrow}>^</p>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./Assets.module.scss";
import AssetsIcon from "./assetsIcon.svg";
import AssetsButton from "../../shared/buttons/assetsButton/AssetsButton";
import ListCryptocoins from "./ui/cryptocoins/ListCryptocoins";

const Assets = () => {
  return (
    <div className={styles.assetsContainer}>
      <div className={styles.themeAssets}>
        <AssetsIcon />
        All Assets
      </div>
      <div>
        <ListCryptocoins />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <AssetsButton />
      </div>
    </div>
  );
};

export default Assets;

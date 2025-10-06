import styles from "./PortfolioPerferomence.module.scss";
import PrtP from "../../shared/globalIcons/portfolioPerferomencePNG.png";

export default function PortfolioPerferomance() {
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.overhead}>
        <div className={styles.overTitle}>
          <img src={PrtP} alt="Portfolio Performance" />
          Portfolio Performance
        </div>
        <div className={styles.selectWrapper}>
          <select>
            <option>Monthly</option>
            <option>Yearly</option>
            <option>Weekly</option>
          </select>
        </div>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.yAxis}>
          <span>$14,000</span>
          <span>$8,000</span>
          <span>$4,000</span>
          <span>$2,000</span>
          <span>$0</span>
        </div>

        <div className={styles.chartContent}>
          <div className={styles.barsContainer}>
            <div className={styles.barGroup}>
              <div className={styles.bar} style={{ height: "43px" }}></div>
              <div className={styles.monthLabel}>Jan</div>
            </div>

            <div className={styles.barGroup}>
              <div className={styles.bar} style={{ height: "77px" }}></div>
              <div className={styles.monthLabel}>Feb</div>
            </div>

            <div className={styles.barGroup}>
              <div className={styles.valueLabel}>$8,000</div>
              <div className={styles.bar} style={{ height: "120px" }}></div>
              <div className={styles.monthLabel}>Mar</div>
            </div>

            <div className={styles.barGroup}>
              <div className={styles.bar} style={{ height: "86px" }}></div>
              <div className={styles.monthLabel}>Apr</div>
            </div>

            <div className={styles.barGroup}>
              <div className={styles.bar} style={{ height: "43px" }}></div>
              <div className={styles.monthLabel}>May</div>
            </div>

            <div className={styles.barGroup}>
              <div className={styles.bar} style={{ height: "64px" }}></div>
              <div className={styles.monthLabel}>Jun</div>
            </div>

            <div className={styles.barGroup}>
              <div className={styles.bar} style={{ height: "86px" }}></div>
              <div className={styles.monthLabel}>Jul</div>
            </div>

            <div className={styles.barGroup}>
              <div className={styles.bar} style={{ height: "113px" }}></div>
              <div className={styles.monthLabel}>Aug</div>
            </div>

            <div className={styles.barGroup}>
              <div className={styles.bar} style={{ height: "104px" }}></div>
              <div className={styles.monthLabel}>Sep</div>
            </div>

            <div className={styles.barGroup}>
              <div
                className={`${styles.bar} ${styles.highlightBar}`}
                style={{ height: "57px" }}
              ></div>
              <div className={styles.monthLabel}>Oct</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

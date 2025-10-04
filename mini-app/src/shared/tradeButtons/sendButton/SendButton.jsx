import sendSVG from "./send-2.svg";
import styles from "./SendButton.module.scss";

export default function SendButton() {
  return (
    <div className={styles.sendButton}>
      <img src={sendSVG} alt="send" />
      Send
    </div>
  );
}

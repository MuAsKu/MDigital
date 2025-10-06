import SendSVG from "./send-2.svg";
import styles from "./SendButton.module.scss";

export default function SendButton() {
  return (
    <div className={styles.sendButton}>
      <SendSVG />
      Send
    </div>
  );
}

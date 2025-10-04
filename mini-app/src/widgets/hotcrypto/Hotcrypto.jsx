import Card from "./ui/Card";
import styles from "./Hotcrypto.module.scss";
import tableImg from "./ui/icons/table.png";
import vectorImg from "./ui/icons/vector.png";
import WideCard from "./widecard/WideCard";
import wideCardGraph from "./widecard/ui/wideCardGraph.png";
import SendButton from "../../shared/tradeButtons/sendButton/SendButton";
import BuyButton from "../../shared/tradeButtons/buyButton/BuyButton";

export default function Hotcrypto() {
  const data = [
    {
      text: "Income",
      price: "$244.67",
      increase: "4.36%",
      img: [tableImg, vectorImg],
    },
    {
      text: "Expense",
      price: "$68.67",
      increase: "4.36%",
      img: [tableImg, vectorImg],
    },
  ];

  return (
    <div className={styles.hotcryptoContainer}>
      <WideCard
        text="Net Worth"
        price="$1365.67"
        increase="4.36%"
        img={wideCardGraph}
        buttons={[<SendButton key="send" />, <BuyButton key="buy" />]}
      />

      {data.map((card, index) => (
        <Card
          key={index}
          text={card.text}
          price={card.price}
          increase={card.increase}
          img={card.img}
        />
      ))}
    </div>
  );
}

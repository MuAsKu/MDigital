import Card from "./ui/Card";

export default function Hotcrypto() {
  const data = [{ text: "Net Worth", price: "1365.67", increase: "4.36%" }];
  return (
    <div className="hotcrypto-container">
      {data.map((card) => {
        <Card text={card.text} price={card.price} increase={card.increase} />;
      })}
    </div>
  );
}

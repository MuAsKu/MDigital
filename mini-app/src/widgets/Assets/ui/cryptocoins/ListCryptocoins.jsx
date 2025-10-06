import React from "react";
import Crypto from "./Crypto";
import BitcoinIcon from "../crypticons/Bitcoin.svg";
import EthiriumIcon from "../crypticons/Etherium.svg";
import DogecoinIcon from "../crypticons/dogecoin.svg";
import LitecoinIcon from "../crypticons/litecoin.svg";
import InuIcon from "../crypticons/inucoin.svg";

export default function ListCryptocoins() {
  const cryptoData = [
    {
      icon: <EthiriumIcon />,
      name: "Etherium",
      price: "$65.00",
      description: "0.025 ETH - $2,908.00",
      increase: "8.36%",
    },
    {
      icon: <BitcoinIcon />,
      name: "Bitcoin",
      price: "$155.00",
      description: "0.025 ETH - $2,908.00",
      increase: "1.36%",
    },
    {
      icon: <DogecoinIcon />,
      name: "Dogecoin",
      price: "$65.00",
      description: "0.025 ETH - $2,908.00",
      increase: "0.12%",
    },
    {
      icon: <LitecoinIcon />,
      name: "Litecoin",
      price: "$65.00",
      description: "0.025 ETH - $2,908.00",
      increase: "4.36%",
    },
    {
      icon: <InuIcon />,
      name: "Dogey Inu",
      price: "$36.12",
      description: "0.025 ETH - $2,908.00",
      increase: "1.24%",
    },
    {
      icon: <InuIcon />,
      name: "Eksimo Inu",
      price: "$12.00",
      description: "0.025 ETH - $2,908.00",
      increase: "4.36%",
    },
  ];

  return (
    <>
      {cryptoData.map((crypt, index) => (
        <Crypto
          key={index}
          icon={crypt.icon}
          name={crypt.name}
          price={crypt.price}
          description={crypt.description}
          increase={crypt.increase}
        />
      ))}
    </>
  );
}

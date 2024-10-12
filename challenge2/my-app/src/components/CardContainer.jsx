import React, { useState } from "react";
import Card from "./Card";
import CartBox from "./CartBox";
import "../styles/CardContainer.css";
//Large images
import waffleImgLarge from '../assets/images/image-waffle-desktop.jpg';
import cremeBruleImgLarge from "../assets/images/image-creme-brulee-desktop.jpg";
import macaronImgLarge from "../assets/images/image-macaron-desktop.jpg";
import tiramisuImgLarge from "../assets/images/image-tiramisu-desktop.jpg";
import baklavaImgLarge from "../assets/images/image-baklava-desktop.jpg";
import lemonMeringuePieImgLarge from "../assets/images/image-meringue-desktop.jpg";
import redValvetCakeImgLarge from "../assets/images/image-cake-desktop.jpg";
import saltedCaramelBrownieLarge from "../assets/images/image-brownie-desktop.jpg";
import pannaCottaImgLarge from "../assets/images/image-panna-cotta-desktop.jpg";
//Medium images
import waffleImgMedium from '../assets/images/image-waffle-tablet.jpg';
import cremeBruleImgMedium from "../assets/images/image-creme-brulee-tablet.jpg";
import macaronImgMedium from "../assets/images/image-macaron-tablet.jpg";
import tiramisuImgMedium from "../assets/images/image-tiramisu-tablet.jpg";
import baklavaImgMedium from "../assets/images/image-baklava-tablet.jpg";
import lemonMeringuePieImgMedium from "../assets/images/image-meringue-tablet.jpg";
import redValvetCakeImgMedium from "../assets/images/image-cake-tablet.jpg";
import saltedCaramelBrownieMedium from "../assets/images/image-brownie-tablet.jpg";
import pannaCottaImgMedium from "../assets/images/image-panna-cotta-tablet.jpg";
//Small images
import waffleImgSmall from '../assets/images/image-waffle-mobile.jpg';
import cremeBruleImgSmall from "../assets/images/image-creme-brulee-mobile.jpg";
import macaronImgSmall from "../assets/images/image-macaron-mobile.jpg";
import tiramisuImgSmall from "../assets/images/image-tiramisu-mobile.jpg";
import baklavaImgSmall from "../assets/images/image-baklava-mobile.jpg";
import lemonMeringuePieImgSmall from "../assets/images/image-meringue-mobile.jpg";
import redValvetCakeImgSmall from "../assets/images/image-cake-mobile.jpg";
import saltedCaramelBrownieSmall from "../assets/images/image-brownie-mobile.jpg";
import pannaCottaImgSmall from "../assets/images/image-panna-cotta-mobile.jpg";


const CardContainer = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);

  const updateTotalQuantity = (amount) => {
    setTotalQuantity((prevTotal) => prevTotal + amount);
  }
  const cardsData = [
    {
      imgSmall: waffleImgSmall,
      imgMedium: waffleImgMedium,
      imgLarge: waffleImgLarge,
      name: "Waffle",
      description: "Waffle with berries",
      price: "$6.50",
    },
    {
      imgSmall: cremeBruleImgSmall,
      imgMedium: cremeBruleImgMedium,
      imgMedium: cremeBruleImgLarge,
      name: "Creme Brulee",
      description: "Vanilla Bean Creme Brulee",
      price: "$7.00",
    },
    {
      imgSmall: macaronImgSmall,
      imgMedium: macaronImgMedium,
      imgLarge: macaronImgLarge,
      name: "Macaron",
      description: "Macaron Mix of five",
      price: "$8.00",
    },
    {
      imgSmall: tiramisuImgSmall,
      imgMedium: tiramisuImgMedium,
      imgLarge: tiramisuImgLarge,
      name: "Tiramisu",
      description: "Classic Tiramisu",
      price: "$5.50",
    },
    {
      imgSmall: baklavaImgSmall,
      imgMedium: baklavaImgMedium,
      imgLarge: baklavaImgLarge,
      name: "Baklava",
      description: "Pistachio Baklava",
      price: "$4.00",
    },
    {
      imgSmall: lemonMeringuePieImgSmall,
      imgMedium: lemonMeringuePieImgMedium,
      imgLarge: lemonMeringuePieImgLarge,
      name: "Pie",
      description: "Lemon Meringue Pie",
      price: "$5.00",
    },
    {
      imgSmall: redValvetCakeImgSmall,
      imgMedium: redValvetCakeImgMedium,
      imgLarge: redValvetCakeImgLarge,
      name: "Cake",
      description: "Red Valvet Cake",
      price: "$4.50",
    },
    {
      imgSmall: saltedCaramelBrownieSmall,
      imgMedium: saltedCaramelBrownieMedium,
      imgLarge: saltedCaramelBrownieLarge,
      name: "Brownie",
      description: "Salted Caramel Brownie",
      price: "$5.50",
    },
    {
      imgSmall: pannaCottaImgSmall,
      imgMedium: pannaCottaImgMedium,
      imgLarge: pannaCottaImgLarge,
      name: "Panna Cotta",
      description: "Vanilla Panna Cotta",
      price: "$6.50",
    },
  ];
  return <div className="card-container">
    {cardsData.map((data, index) => (
      <Card
        key={index}
        imgSmall={data.imgSmall}
        imgMedium={data.imgMedium}
        imgLarge={data.imgLarge}
        name={data.name}
        description={data.description}
        price={data.price}
        updateTotalQuantity={updateTotalQuantity}
      />

    ))}
    <div>
      <CartBox quantity={totalQuantity}/>
    </div>
  </div>

}

export default CardContainer;
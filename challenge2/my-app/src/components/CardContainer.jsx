import React, { useState } from "react";
import Card from "./Card";
import CartBox from "./CartBox";
import "../styles/CardContainer.css";

import waffleImg from '../assets/images/image-waffle-desktop.jpg';
import cremeBruleImg from "../assets/images/image-creme-brulee-desktop.jpg";
import macaronImg from "../assets/images/image-macaron-desktop.jpg";
import tiramisuImg from "../assets/images/image-tiramisu-desktop.jpg";
import baklavaImg from "../assets/images/image-baklava-desktop.jpg";
import lemonMeringuePieImg from "../assets/images/image-meringue-desktop.jpg";
import redValvetCakeImg from "../assets/images/image-cake-desktop.jpg";
import saltedCaramelBrownie from "../assets/images/image-brownie-desktop.jpg";
import pannaCottaImg from "../assets/images/image-panna-cotta-desktop.jpg";

const CardContainer = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartItems, setCartItems] = useState({});

  const updateTotalQuantity = (amount) => {
    setTotalQuantity((prevTotal) => prevTotal + amount);
  };

  const toggleInCart = (name, inCart) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (inCart) {
        updatedItems[name] = true;
      } else {
        delete updatedItems[name];
      }
      return updatedItems;
    });
  };

  const cardsData = [
    {
      img: waffleImg,
      name: "Waffle",
      description: "Waffle with berries",
      price: "$6.50",
    },
    {
      img: cremeBruleImg,
      name: "Creme Brulee",
      description: "Vanilla Bean Creme Brulee",
      price: "$7.00",
    },
    {
      img: macaronImg,
      name: "Macaron",
      description: "Macaron Mix of five",
      price: "$8.00",
    },
    {
      img: tiramisuImg,
      name: "Tiramisu",
      description: "Classic Tiramisu",
      price: "$5.50",
    },
    {
      img: baklavaImg,
      name: "Baklava",
      description: "Pistachio Baklava",
      price: "$4.00",
    },
    {
      img: lemonMeringuePieImg,
      name: "Pie",
      description: "Lemon Meringue Pie",
      price: "$5.00",
    },
    {
      img: redValvetCakeImg,
      name: "Cake",
      description: "Red Valvet Cake",
      price: "$4.50",
    },
    {
      img: saltedCaramelBrownie,
      name: "Brownie",
      description: "Salted Caramel Brownie",
      price: "$5.50",
    },
    {
      img: pannaCottaImg,
      name: "Panna Cotta",
      description: "Vanilla Panna Cotta",
      price: "$6.50",
    },
  ];

  return (
    <div className="total-container">
      <div className="card-container">
        {cardsData.map((data, index) => (
          <Card
            key={index}
            img={data.img}
            name={data.name}
            description={data.description}
            price={data.price}
            updateTotalQuantity={updateTotalQuantity}
            toggleInCart={toggleInCart}
            inCart={!!cartItems[data.name]}
          />
        ))}
      </div>
      <div className="cart-box-total">
        <CartBox quantity={totalQuantity} />
      </div>
      <div>
        {Object.keys(cartItems).length > 0 ? ( // Check if there are items in the cart
          <div>
            <h2>Items in Cart:</h2>
            <ul>
              {Object.keys(cartItems).map((item) => (
                <li key={item}>{item}</li> // Display each item name
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CardContainer;

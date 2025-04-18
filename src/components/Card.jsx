import React, { useState } from "react";
import "../styles/Card.css";

const Card = ({ img, name, description, price, updateTotalQuantity, toggleInCart, inCart }) => {
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + 1;
            updateTotalQuantity(1);
            toggleInCart(name, true, 1, price, img);
            return newQuantity;
        });
    };

    const decrement = () => {
        setQuantity((prevQuantity) => {
            if (prevQuantity > 0) {
                updateTotalQuantity(-1);
                toggleInCart(name, true, -1, price, img);
                return prevQuantity - 1;
            }
            return prevQuantity;
        });
    };

    const handleAddToCart = () => {
        setQuantity(1);
        updateTotalQuantity(1);
        toggleInCart(name, true, 1, price, img);
    };

    const addToCartIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
            <g fill="#C73B0F" clipPath="url(#a)">
                <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M.333 0h20v20h-20z" />
                </clipPath>
            </defs>
        </svg>
    );

    return (
        <div className="dish-card">
            <div className="img-container">
                <img className="img-of-the-dish" style={inCart ? { border: '3px solid hsl(14, 86%, 42%)' } : {}} src={img} alt="dish" />
                {inCart ? (
                    <div className="add-to-cart-button" id="quantity-controls">
                        <button className="quantity-button" id="decrement" onClick={decrement}>-</button>
                        <span>{quantity}</span>
                        <button className="quantity-button" id="increment" onClick={increment}>+</button>
                    </div>
                ) : (
                    <button className="add-to-cart-button" onClick={handleAddToCart}>
                        {addToCartIcon} Add to Cart
                    </button>
                )}
            </div>
            <div className="description-elements">
                <p style={{ color: 'hsl(12, 20%, 44%)', fontSize: 'small' }}>{name}</p>
                <p className="bold-text">{description}</p>
                <p className="bold-text" style={{ color: 'hsl(14, 86%, 42%)' }}>{price}</p>
            </div>

        </div>
    );
};

export default Card;

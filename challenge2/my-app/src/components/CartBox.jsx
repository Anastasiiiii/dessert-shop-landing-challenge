import React, { useState } from "react";
import "../styles/CartBox.css";

const CartBox = ({ quantity, cartItems }) => {
    return (
        <div className="cart-box">
            <h1>Your Cart&#40;{quantity}&#41;</h1>
            <div>
                {Object.keys(cartItems).length > 0 ? ( // Check if there are items in the cart
                    <div className="cart-added-items">
                            {Object.keys(cartItems).map((item) => (
                                <h4 key={item}>{item}(Quantity: {cartItems[item]})</h4> // Display each item name    
                            ))}
                    </div>
                ) : null}
            </div>
            <p className="total-order-text"> Order Total: {quantity}</p>
            <div className="delivery-info">
                <p>This is carbon-neutral delivery</p>
            </div>
            <button className="confirm-button">Confirm Order</button>
        </div>
    )

}

export default CartBox;
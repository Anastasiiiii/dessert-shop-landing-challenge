import React, { useState } from "react";
import "../styles/CartBox.css";

const CartBox = ({ quantity }) => {
    return (
        <div className="cart-box">
            <h1>Your Cart&#40;{quantity}&#41;</h1>
            
            <p className="total-order-text"> Order Total: {quantity}</p>
            <div className="delivery-info">
                <p>This is carbon-neutral delivery</p>
            </div>
            <button className="confirm-button">Confirm Order</button>
        </div>
    )

}

export default CartBox;
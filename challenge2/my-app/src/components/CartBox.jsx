import React, { useState } from "react";
import "../styles/CartBox.css";

const CartBox = ({ quantity, isChoosing, selectedDishes }) => {
    return (
        <div className="cart-box">
            <h1>Your Cart&#40;{quantity}&#41;</h1>
            {isChoosing && selectedDishes > 0 ? (
                <div className="chosen-element">
                    {selectedDishes.map((dish, index) => (
                        <div key={index}>
                            <p>{dish.name} - {dish.price} (Quantity: {dish.quantity})</p>
                            <img src={dish.img} alt={dish.name} style={{ width: "50px", height: "50px" }} />
                        </div>
                    ))}
                </div>) : null}
            <p className="total-order-text"> Order Total: {quantity}</p>
            <div className="delivery-info">
                <p>This is carbon-neutral delivery</p>
            </div>
            <button className="confirm-button">Confirm Order</button>
        </div>
    )

}

export default CartBox;
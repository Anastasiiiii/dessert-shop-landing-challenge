import React, { useState } from "react";
import Popup from 'reactjs-popup';
import "../styles/CartBox.css";

const CartBox = ({ quantity, cartItems, removeItem }) => {

    const calculateDishTotal = (quantity, price) => {
        const numericPrice = parseFloat(price.replace("$", ""));
        return quantity * numericPrice;
    }

    //Function to calculate total price of all items in the cart
    const calculateTotalOrder = () => {
        return Object.keys(cartItems).reduce((total, item) => {
            const itemQuantity = cartItems[item].quantity;
            const itemPrice = parseFloat(cartItems[item].price.replace("$", ""));
            return total + itemQuantity * itemPrice;
        }, 0);
    }

    const totalOrder = calculateTotalOrder();

    const removeDishIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" /></svg>
    )

    const neutralCarbonIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z" /><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z" /></svg>
    )

    const emptyCartIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="none" viewBox="0 0 128 128"><path fill="#260F08" d="M8.436 110.406c0 1.061 4.636 2.079 12.887 2.829 8.252.75 19.444 1.171 31.113 1.171 11.67 0 22.861-.421 31.113-1.171 8.251-.75 12.887-1.768 12.887-2.829 0-1.061-4.636-2.078-12.887-2.828-8.252-.75-19.443-1.172-31.113-1.172-11.67 0-22.861.422-31.113 1.172-8.251.75-12.887 1.767-12.887 2.828Z" opacity=".15" /><path fill="#87635A" d="m119.983 24.22-47.147 5.76 4.32 35.36 44.773-5.467a2.377 2.377 0 0 0 2.017-1.734c.083-.304.104-.62.063-.933l-4.026-32.986Z" /><path fill="#AD8A85" d="m74.561 44.142 47.147-5.754 1.435 11.778-47.142 5.758-1.44-11.782Z" /><path fill="#CAAFA7" d="M85.636 36.78a2.4 2.4 0 0 0-2.667-2.054 2.375 2.375 0 0 0-2.053 2.667l.293 2.347a3.574 3.574 0 0 1-7.066.88l-1.307-10.667 14.48-16.88c19.253-.693 34.133 3.6 35.013 10.8l1.28 10.533a1.172 1.172 0 0 1-1.333 1.307 4.696 4.696 0 0 1-3.787-4.08 2.378 2.378 0 1 0-4.72.587l.294 2.346a2.389 2.389 0 0 1-.484 1.755 2.387 2.387 0 0 1-1.583.899 2.383 2.383 0 0 1-1.755-.484 2.378 2.378 0 0 1-.898-1.583 2.371 2.371 0 0 0-1.716-2.008 2.374 2.374 0 0 0-2.511.817 2.374 2.374 0 0 0-.493 1.751l.293 2.373a4.753 4.753 0 0 1-7.652 4.317 4.755 4.755 0 0 1-1.788-3.17l-.427-3.547a2.346 2.346 0 0 0-2.666-2.053 2.4 2.4 0 0 0-2.08 2.667l.16 1.173a2.378 2.378 0 1 1-4.72.587l-.107-1.28Z" /><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="m81.076 28.966 34.187-4.16" /><path fill="#87635A" d="M7.45 51.793c-.96 8.48 16.746 17.44 39.466 19.947 22.72 2.506 42.08-2.16 43.04-10.667l-3.947 35.493c-.96 8.48-20.24 13.334-43.04 10.667S2.463 95.74 3.423 87.18l4.026-35.387Z" /><path fill="#AD8A85" d="M5.823 65.953c-.96 8.453 16.746 17.44 39.573 20.027 22.827 2.586 42.053-2.187 43.013-10.667L87.076 87.1c-.96 8.48-20.24 13.333-43.04 10.666C21.236 95.1 3.53 86.22 4.49 77.74l1.334-11.787Z" /><path fill="#CAAFA7" d="M60.836 42.78a119.963 119.963 0 0 0-10.347-1.627c-24-2.667-44.453 1.893-45.333 10.373l-2.133 18.88a3.556 3.556 0 1 0 7.066.8 3.574 3.574 0 1 1 7.094.8l-.8 7.094a5.93 5.93 0 1 0 11.786 1.333 3.556 3.556 0 0 1 7.067.8l-.267 2.347a3.573 3.573 0 0 0 7.094.826l.133-1.2a5.932 5.932 0 1 1 11.787 1.36l-.4 3.52a3.573 3.573 0 0 0 7.093.827l.933-8.267a1.174 1.174 0 0 1 1.307-.906 1.146 1.146 0 0 1 1.04 1.306 5.947 5.947 0 0 0 11.813 1.334l.534-4.72a3.556 3.556 0 0 1 7.066.8 3.573 3.573 0 0 0 7.094.826l1.786-15.546a2.373 2.373 0 0 0-2.08-2.667L44.143 55.74l16.693-12.96Z" /><path fill="#87635A" d="m59.156 57.66 1.68-14.88-16.827 13.173 15.147 1.707Z" /><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="M9.796 52.06c-.667 5.866 16.24 12.586 37.733 15.04 14.774 1.68 27.867.906 34.854-1.654" /></svg>)

    const orderConfirmedIcon = (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z" fill="#1EA575" />
            <path d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z" fill="#1EA575" />
        </svg>

    )

    const refreshPage = () => {
        window.location.reload(false);
    }

    return (
        <div className="cart-box">
            <h1>Your Cart ({quantity})</h1>
            <div>
                {Object.keys(cartItems).length > 0 ? ( // Check if there are items in the cart
                    <div className="cart-added-items">
                        {Object.keys(cartItems).map((item) => {
                            const itemQuantity = cartItems[item].quantity;
                            const itemPrice = cartItems[item].price;
                            const dishTotal = calculateDishTotal(itemQuantity, itemPrice);

                            return (
                                <div className="added-to-cart-dish">
                                    <h4 key={item}>
                                        {item}
                                    </h4>
                                    <div className="dish-elements-function">
                                        <p className="price-info">
                                            <span className="quantity">
                                                {itemQuantity}x
                                            </span>
                                            {itemPrice}&nbsp;&nbsp; ${dishTotal.toFixed(2)}
                                        </p>
                                        <button className="remove-button" onClick={() => removeItem(item)}>
                                            {removeDishIcon}
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="total-order-div">
                            <p className="total-order-text"> Order Total: </p>
                            <p className="total-order-sum">${totalOrder.toFixed(2)}</p>
                        </div>
                        <div className="delivery-info">
                            <span>{neutralCarbonIcon}</span>
                            <p style={{ marginLeft: '10px' }}>This is carbon-neutral delivery</p>
                        </div>
                        <Popup trigger={<button className="confirm-button">Confirm Order</button>} position="right center">
                            <div className="popup-overlay"></div>
                            <div className="pop-up-window-container">
                                <div>
                                    <span className="confirmed-order-icon">{orderConfirmedIcon}</span>
                                    <h1>Order Confirmed</h1>
                                    <p>We hope you enjoy your food!</p>
                                </div>
                                <div className="confirmed-dishes-container">
                                    {Object.keys(cartItems).map((item) => {
                                        const itemQuantity = cartItems[item].quantity;
                                        const itemPrice = cartItems[item].price;
                                        const dishTotal = calculateDishTotal(itemQuantity, itemPrice);

                                        return (
                                            <div className="confirmed-dishes-block">
                                                <img src={cartItems[item].img} className="img-of-confirmed-order" alt={item} />
                                                <div className="price-info">
                                                    <p className="item-name">{item}</p>
                                                    <p className="quantity">
                                                        {itemQuantity}x &nbsp;&nbsp;
                                                        <span>{itemPrice}</span>
                                                    </p>
                                                </div>
                                                <p className="dish-total">
                                                    ${dishTotal.toFixed(2)}
                                                </p>
                                            </div>
                                        )
                                    })}
                                    <div className="total-confirmed-order-div">
                                        <p className="total-confirmed-order-text"> Order Total: </p>
                                        <p className="total-confirmed-order-sum">${totalOrder.toFixed(2)}</p>
                                    </div>
                                </div>
                                <button className="start-new-order-button" onClick={refreshPage}>Start New Order</button>
                            </div>
                        </Popup>
                    </div>

                ) : (
                    <div className="empty-cart-container">
                        <span>{emptyCartIcon}</span>
                        <p>Your added items will appear her</p>
                    </div>
                )}
            </div>

        </div>
    )

}

export default CartBox;
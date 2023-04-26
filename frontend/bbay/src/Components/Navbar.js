import React, {useEffect, useState } from "react";

import Cart from './Cart';

import './Navbar.css'
import cart from '../Images/cart.png'

const Navbar = (props) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    function toggleCart() {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div className="navbar">
            <div className="logo">Bbay</div>
            <div className={`button-container ${isCartOpen ? 'open' : ''}`}>
                <button className="button" onClick={toggleCart}>
                    <img src={cart} alt="cart" className="cart-image"/>
                </button>
            </div>
            <div className={`cart-container ${isCartOpen ? 'open' : ''}`}>
                <Cart cart={props.cart}/>
            </div>
        </div>
    );
}

export default Navbar

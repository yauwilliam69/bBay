import React, {useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Catalog from './Components/Catalog';
import Navbar from './Components/Navbar';


function App() {
  const [cart, setCart] = useState({});

  function addToCart(itemName, itemPrice) {
    // console.log("Adding %s to the cart", itemName)
    if (cart[itemName]) {
      setCart(prevCart => ({
        ...prevCart,
        [itemName]: {
          price: itemPrice,
          quantity: prevCart[itemName].quantity + 1
        }
      }));
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      setCart(prevCart => ({
        ...prevCart,
        [itemName]: {
          price: itemPrice,
          quantity: 1
        }
      }));
    }
  }

  useEffect(() => {
    console.log("Cart state updated: ", cart);
  }, [cart]);
  

  return (
    <div className="App">
      <Navbar cart={cart}/>
      <Catalog addToCart={addToCart}/>
    </div>
  );
}

export default App;

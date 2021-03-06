import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import PlantList from "./components/PlantList";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";
import { useDarkMode } from './hooks/useDarkMode'
import "./App.css";
import styled from 'styled-components'

const Div = styled.div`
    background: papayawhip;
    border-radius: 50px;
    border: 1px solid black;
    height: 20px;
    position: relative;
    width: 40px;
    display: inline-block;
  
  .toggle {
    background: #f68819;
    border-radius: 50px;
    height: 18px;
    left: 0;
    position: absolute;
    transition: 0.2s;
    width: 20px;
}
.toggled {
    left: 18px;
}


  
`
function App() {
  // array of plants that have been added to the cart
  const [cart, setCart] = useState([]);

  // add a plant to the cart
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  // remove a plant from the cart
  const removeFromCart = (plant) => {
    setCart(cart.filter((p) => p.id !== plant.id));
  };
  //DarkMode
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark-mode" : ''}>
      <Router>
        <nav className="container">
          <section>
            <h2>Dark Mode Toggle &nbsp; </h2>
          <Div className="dark-mode__toggle" onClick={toggleMode}>
            
            <div
              className={darkMode ? 'toggle toggled' : 'toggle'}
            />
          </Div>
          </section>
          
          <h1>
            React Plants <span role="img">🌿</span>
          </h1>
          <ul className="steps">
            <li>
              <NavLink exact to="/">
                Plants
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                Cart
                <span className="cart-badge">
                  {cart.length > 0 && cart.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route
          exact
          path="/"
          render={() => <PlantList addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          render={(props) => (
            <ShoppingCart
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          )}
        />
        <Route path="/checkout" component={CheckoutForm} />
      </Router>
    </div>
  );
}

export default App;

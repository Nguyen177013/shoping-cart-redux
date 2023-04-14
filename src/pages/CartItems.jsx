import React from "react";
import CartItem from "./CartItem";
import "../assets/styles/Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const { itemsList: cartItem } = useSelector(state => state.cart);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
          {cartItem.map(cart => (
            <CartItem
              id={cart.id}
              price={cart.price}
              total={cart.totalPrice}
              key={cart.id}
              name={cart.name} 
              quantity={cart.quantity}
              />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default CartItems;
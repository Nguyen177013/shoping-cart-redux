import React from "react";
import "../assets/styles/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
const Cart = () => {
  const {totalQuantity : quantity} = useSelector(state =>state.cart);
  const dispatch = useDispatch();
  function showCart(){
    dispatch(cartActions.setShowCart());
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
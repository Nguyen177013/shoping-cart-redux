import React from "react";
import Header from "../pages/Header";
import Products from "../pages/Products";
import { useSelector } from "react-redux";
import "../assets/styles/Layout.css";
import CartItems from "../pages/CartItems";
const Layout = () => {
  const { totalQuantity } = useSelector(state => state.cart);
  let total = totalQuantity;
  const {showCart} = useSelector(state => state.cart);
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
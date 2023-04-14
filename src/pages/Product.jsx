import React from "react";
import {cartActions} from "../store/cart-slice"
import "../assets/styles/Product.css";
import { useDispatch } from "react-redux";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  function addToCart(){
    dispatch(cartActions.addToCart({ name, id, imgURL, price }));
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
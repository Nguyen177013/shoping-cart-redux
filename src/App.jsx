import React, { useEffect } from "react";
import "./App.css";
import Auth from "./pages/Auth";
import Layout from "./component/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./pages/Notification";
import { uiActions } from "./store/ui-slice";
import { fetchData, sendCartData } from "./store/cart-action";

let isFirstRender = true;
function App() {
  const cart = useSelector(state => state.cart)
  const { isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { notification } = useSelector(state => state.ui);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  useEffect(()=>{
    dispatch(sendCartData(cart));
  },[cart, dispatch])
  return (
    <div className="App">
      {notification && <Notification {...notification} />}
      {isLoggedIn || <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
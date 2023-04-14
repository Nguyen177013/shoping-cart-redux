import React from "react";
import "./App.css";
import Auth from "./pages/Auth";
import Layout from "./component/Layout";
import { useSelector } from "react-redux";

function App() {

  const { isLoggedIn } = useSelector(state => state.auth);
  const {itemsList} = useSelector(state=>state.cart);
  console.log(itemsList);
  return (
    <div className="App">
      {isLoggedIn || <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
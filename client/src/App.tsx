import React from "react";
import "./App.css";
import CardCommon from "./component/common/CardCommon/CardCommon";
import Home from "./component/pages/Home/Home";
// import Home from "./component/pages/Home/Home";
import Login from "./component/pages/Login/Login";
import Product from "./component/pages/Product/Product";
// import PrivateRouter from "./component/layout/PrivateRouter";
// import { Provider } from "react-redux";
// import { store } from "./redux/Store";

function App() {
  return (
    <>
      <Product />
      {/* <CardCommon /> */}
      {/* <Home /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;

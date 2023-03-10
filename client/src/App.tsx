import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CardCommon from "./component/common/CardCommon/CardCommon";
import NavBarLayout from "./component/layout/NavBarLayout/NavBarLayout";
import Home from "./component/pages/Home/Home";
// import Home from "./component/pages/Home/Home";
import Login from "./component/pages/Login/Login";
import Product from "./component/pages/Product/Product";
import { store } from "./redux/Store";
// import PrivateRouter from "./component/layout/PrivateRouter";
// import { Provider } from "react-redux";
// import { store } from "./redux/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <Product /> */}
        {/* <CardCommon /> */}
        {/* <NavBarLayout /> */}
        <Home />
        {/* <Login /> */}
      </Provider>
    </>
  );
}

export default App;

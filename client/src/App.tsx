import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CardCommon from "./component/common/CardCommon/CardCommon";
import InputSearchCommon from "./component/common/Input/InputSearchCommon/InputSearchCommon";
import NavBarLayout from "./component/layout/NavBarLayout/NavBarLayout";
import PrivateRouter from "./component/layout/PrivateRouter";
import Home from "./component/pages/HomePage/HomePage";
// import Home from "./component/pages/Home/Home";

import Product from "./component/pages/Product/Product";
import AuthBaseLayout from "./component/layout/AuthBaseLayout/AuthBaseLayout";
import { store } from "./redux/Store";
import TitleTableCommon from "./component/common/TitleTableCommon/TitleTableCommon";
import TitleTableList from "./component/common/TitleTableCommon/TitleTableCommon";

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
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <InputSearchCommon /> */}
        <AuthBaseLayout />
        {/* <TitleTableCommon /> */}
        {/* <TitleTableList /> */}
        <PrivateRouter />
      </Provider>
    </>
  );
}

export default App;

import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/constants/routes";
import AuthBaseLayout from "./AuthBaseLayout/AuthBaseLayout";

const PrivateRouter: React.FC = () => {
  const privateRoutes = [
    // {
    //   path: ROUTES.ADMIN_DASHBOARD,
    //   element: lazy(() => import("../pages/Home/Home")),
    // },
    {
      path: ROUTES.ADMIN_MEN,
      element: lazy(() => import("../pages/HomePage/HomePage")),
      type: "men",
    },
    {
      path: ROUTES.ADMIN_WOMEN,
      element: lazy(() => import("../pages/HomePage/HomePage")),
      type: "women",
    },
    {
      path: ROUTES.SIGNUP,
      element: lazy(() => import("../pages/Login/Login")),
    },
    {
      path: ROUTES.SIGNIN,
      element: lazy(() => import("../pages/SignIn/SignIn")),
    },
    {
      path: ROUTES.ADMIN_PRODUCT,
      element: lazy(() => import("../pages/Product/Product")),
    },
    {
      path: ROUTES.ADMIN_ABOUT,
      element: lazy(() => import("../pages/About/About")),
    },
    {
      path: "*",
      element: lazy(() => import("../pages/NotFound/NotFound")),
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthBaseLayout />}>
          {privateRoutes.map((route, index) => (
            <Route
              path={route.path}
              element={
                <React.Suspense fallback={<>...</>}>
                  <route.element type={route.type} />
                </React.Suspense>
              }
              key={index}
            ></Route>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default PrivateRouter;

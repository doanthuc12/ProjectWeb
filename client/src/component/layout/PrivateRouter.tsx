import { type } from "os";
import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/constants/routes";
import AuthBaseLayout from "./AuthBaseLayout/AuthBaseLayout";

const PrivateRouter: React.FC = () => {
  const privateRoutes = [
    {
      path: ROUTES.ADMIN_MEN,
      element: lazy(() => import("../pages/HomePage/HomePage")),
      props: {
        type: "men",
      } as IHomePage,
    },
    {
      path: ROUTES.ADMIN_WOMEN,
      element: lazy(() => import("../pages/HomePage/HomePage")),
      props: {
        type: "women",
      } as IHomePage,
    },
    {
      path: "/",
      element: lazy(() => import("../pages/HomePage/HomePage")),
    },
    {
      path: ROUTES.SIGNUP,
      element: lazy(() => import("../pages/SignUp/SignUp")),
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
      path: ROUTES.ADMIN_BAG,
      element: lazy(() => import("../pages/Bag/Bag")),
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
          {privateRoutes.map((route: any, index) => (
            <Route
              path={route.path}
              element={
                <React.Suspense fallback={<>Loading...</>}>
                  {route?.props ? (
                    <route.element {...route.props} />
                  ) : (
                    <route.element />
                  )}
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

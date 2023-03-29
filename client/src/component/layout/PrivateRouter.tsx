import { type } from "os";
import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/constants/routes";
import AuthBaseLayout from "./AuthBaseLayout/AuthBaseLayout";

const PrivateRouter: React.FC = () => {
  const privateRoutes = [
    // HOMEPAGE
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

    // SIGNIN_SIGNUP
    {
      path: ROUTES.SIGNUP,
      element: lazy(() => import("../pages/SignUp/SignUp")),
    },
    {
      path: ROUTES.SIGNIN,
      element: lazy(() => import("../pages/SignIn/SignIn")),
    },

    // PRODUCT PAGE
    {
      path: ROUTES.ADMIN_PRODUCT,
      element: lazy(() => import("../pages/Product/Product")),
    },
    {
      path: ROUTES.ADMIN_PRODUCT_SALE,
      element: lazy(() => import("../pages/Product/Product")),
      props: {
        type: "sale",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_NEWIN,
      element: lazy(() => import("../pages/Product/Product")),
      props: {
        type: "new in",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_CLOTHING,
      element: lazy(() => import("../pages/Product/Product")),
      props: {
        type: "clothing",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_SHOES,
      element: lazy(() => import("../pages/Product/Product")),
      props: {
        type: "shoes",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_ACCESSORIES,
      element: lazy(() => import("../pages/Product/Product")),
      props: {
        type: "accessories",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_SPORTSWEAR,
      element: lazy(() => import("../pages/Product/Product")),
      props: {
        type: "sportswear",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_JEANS,
      element: lazy(() => import("../pages/Product/Product")),
      props: {
        type: "jeans",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_BRANDS,
      element: lazy(() => import("../pages/Product/Product")),
      props: {
        type: "brands",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_TOPMAN,
      element: lazy(() => import("../pages/Product/Product")),
      props: {
        type: "topman",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_OUTLET,
      element: lazy(() => import("../pages/Product/Product")),
      props: {
        type: "outlet",
      } as IProduct,
    },
    {
      path: ROUTES.ADMIN_PRODUCT_MARKETPLACE,
      element: lazy(() => import("../pages/Product/Product")),
      props: {
        type: "marketplace",
      } as IProduct,
    },
    //DETAILPRODUCT
    {
      path: ROUTES.ADMIN_DETAILPRODUCT,
      element: lazy(() => import("../pages/DetailProduct/DetailPage")),
    },

    // BAG_PAGE
    {
      path: ROUTES.ADMIN_BAG,
      element: lazy(() => import("../pages/Bag/Bag")),
    },
    // SAVED_PAGE
    {
      path: ROUTES.ADMIN_SAVED,
      element: lazy(() => import("../pages/Saved/Saved")),
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

// export routes on application

const MENU_PARRENT = {
  ADMIN: "/",
};

export const ROUTES = {
  // ADMIN_DASHBOARD: MENU_PARRENT.ADMIN,
  ADMIN_MEN: MENU_PARRENT.ADMIN + "/men",
  ADMIN_WOMEN: MENU_PARRENT.ADMIN + "/women",
  ADMIN_ABOUT: MENU_PARRENT.ADMIN + "/about",
  ADMIN_USERS: MENU_PARRENT.ADMIN + "/users",
  ADMIN_USER: MENU_PARRENT.ADMIN + "/users/:id",
  SIGNUP: "/login",
  SIGNIN: "/signin",
  ADMIN_PRODUCT: MENU_PARRENT.ADMIN + "/products",
};

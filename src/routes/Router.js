import { lazy } from "react";

import { allRoutes } from "../shared/constants/allRoutes";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/About"));

const Router = [
  {
    path: "",
    isAuth: false,
    isNested: true,
    children: [
      { path: allRoutes.About, component: About, exact: true },
      { path: allRoutes.home, component: Home, exact: true },
    ],
  },
];

export default Router;

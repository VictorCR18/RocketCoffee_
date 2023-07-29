import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

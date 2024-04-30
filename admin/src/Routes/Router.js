import { createBrowserRouter } from "react-router-dom";
import Main from "../Loyout/Main";
import Hero from "../Component/Hero/Hero";
import Addproduct from "./../Pages/addproduct/Addproduct";
import List from "./../Pages/list/List";
import Orders from "./../Pages/orders/Orders";
import Sidebar from "../Component/sidebar/Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/Sidebar",
        element: <Sidebar />,
      },
      {
        path: "/Addproduct",
        element: <Addproduct />,
      },
      {
        path: "/List",
        element: <List />,
      },
      {
        path: "/Orders",
        element: <Orders />,
      },
    ],
  },
]);

export default router;

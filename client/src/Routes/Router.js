import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Mobileapp from "../pages/mobileapp/Mobileapp";
import Contact from "../pages/Contact/Contact";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Gototop from "../Component/gototop/Gototop";
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Menu",
        element: <Menu />,
      },
      {
        path: "/Mobileapp",
        element: <Mobileapp />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Gototop",
        element: <Gototop />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;

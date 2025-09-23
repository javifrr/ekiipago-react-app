import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import QuienesSomos from "../../modules/quienes-somos/QuienesSomos";
import Products from "../modules/products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/quienes-somos",
        element: <QuienesSomos />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./modules/home/Home";
import Blog from "./modules/blog/Blog";
import { Contacto } from "./modules/contacto";
import BotonDePago from "./modules/productos/BotonDepago";
import LinkDePagoMovil from "./modules/productos/LinkDePagoMovil";
import RecargaYPagoDeServicios from "./modules/productos/RecargaYPagoDeServicios";
import DocumentacionApi from "./modules/productos/DocumentacionApi";
import QuienesSomos from "./modules/quienes-somos/QuienesSomos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contacto",
        element: <Contacto />,
      },
      {
        path: "/productos",
        element: <BotonDePago />,
      },
      {
        path: "/link-de-pago-movil",
        element: <LinkDePagoMovil />,
      },
      {
        path: "/recarga-y-pago-de-servicios",
        element: <RecargaYPagoDeServicios />,
      },
      {
        path: "/documentacion-api",
        element: <DocumentacionApi />,
      },
      {
        path: "/quienes-somos",
        element: <QuienesSomos />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

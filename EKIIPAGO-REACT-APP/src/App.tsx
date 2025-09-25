import { Outlet } from "react-router-dom";
import "./modules/home/Home.css";
import "./modules/quienes-somos/QuienesSomos.css";
import "./modules/boton-de-pago/BotonDePago.css";
import "./modules/blog/Blog.css";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;

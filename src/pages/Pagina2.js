import React from "react";
import { Link } from "react-router-dom";
import "./Pagina2.css";

function Pagina2() {
  return (
    <div className="contenidoo">
      <h1 className="title">BIOGRAFÍA</h1>
      <div className="subtitulo">Sebastian Cifuentes Moncada</div>
      <div className="contenido">
        Hola, me presento soy Sebastian Cifuentes Moncada, un estudiante de la
        institución universitaria Pascual Bravo. En estos momentos estoy
        realizando mi propio portafolio para mi página web.
      </div>
      <Link to="/Pagina1" className="anteriorpag">
        Página anterior
      </Link>
      <Link to="/Pagina3" className="siguientepag">
        Siguiente página
      </Link>
    </div>
  );
}

export default Pagina2;

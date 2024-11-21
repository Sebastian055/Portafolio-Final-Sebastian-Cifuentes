import React from "react";
import { Link } from "react-router-dom";
import "./Pagina3.css";

// Importa las imágenes
import portafolioImagen from "./portafolio imagen.jpg";
import proximamenteImagen from "./proximamente.jpg";

function Pagina3() {
  return (
    <div className="pagina3">
      <h1 className="titulo-proyectos">
        <span className="mis">Mis</span> PROYECTOS:
      </h1>
      <div className="contenido-proyectos">
        <div className="descripcion">
          <p>
        Bienvenido/a a el apartado de mis proyectos, aca podras ver cuales son mis proyectos ya realizados o futuros a realizar,
        en el proyecto 1 podras ver una imagen la cual es el inicio de mi portafolio, y en el proyecto 2 podras observar un proximo proyecto.
          </p>
        </div>
        <div className="imagenes">
          <div className="proyecto">
            <img src={portafolioImagen} alt="Proyecto 1" />
            <p>Proyecto 1</p>
          </div>
          <div className="proyecto">
            <img src={proximamenteImagen} alt="Proyecto 2" />
            <p>Proyecto 2</p>
          </div>
        </div>
      </div>
  
      <div className="botones-navegacion">
        <Link to="/Pagina2" className="boton">
          Página anterior
        </Link>
        <Link to="/Pagina4" className="boton">
          Siguiente página
        </Link>
      </div>
    </div>
  );
}

export default Pagina3;

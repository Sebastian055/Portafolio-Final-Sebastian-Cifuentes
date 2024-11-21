import React from "react";
import { Link } from "react-router-dom";
import "./Pagina1.css";

function Pagina1() {
  return (
    <div className="pagina1">
      <h1 className="title">PORTFOLIO</h1>
      <div className="nombre">SEBASTIAN CIFUENTES</div>
      <Link to="/Pagina2" className="siguientepag">
        Siguiente página
      </Link>
    </div>
  );
}

export default Pagina1;

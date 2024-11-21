import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Pagina4.css";

function Pagina4() {
  const canvasRef = useRef(null);

  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY
    );
    canvas.isDrawing = true;
  };

  const draw = (event) => {
    const canvas = canvasRef.current;
    if (!canvas.isDrawing) return;

    const context = canvas.getContext("2d");
    context.lineTo(
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY
    );
    context.stroke();
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    if (canvas.isDrawing) {
      canvas.isDrawing = false;
      const context = canvas.getContext("2d");
      context.closePath();
    }
  };



  return (
    <div className="pagina4">
      <div className="contacto-header">
        <h1>CONTACTO</h1>
      </div>
      <div className="contacto-info">
        <div className="icono">
          <img
            src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
            alt="Teléfono"
          />
          <p>0000000</p>
        </div>
        <div className="icono">
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Correo"
          />
          <p>sebastian.cifuentes@pascualbravo.edu.co</p>
        </div>
      </div>
      <div className="mensaje">
        <p>Deja tu mensaje/dibujo:</p>
        <canvas
          ref={canvasRef}
          width={500}
          height={200}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
        ></canvas>
      </div>
      <div className="navegacion">
        <Link to="/Pagina3" className="boton-navegacion">
          Página Anterior
        </Link>
      </div>
    </div>
  );
}

export default Pagina4;

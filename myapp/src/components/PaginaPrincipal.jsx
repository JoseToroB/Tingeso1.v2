import React from 'react';
import { Link } from 'react-router-dom';

const PaginaPrincipal = () => {
  return (
    <div className="pagina-principal">
      <h1>Tingeso evaluacion 1</h1>
      <div className="acciones-menu">
        <Link to="/crear-auto">
          <button className="btn-accion">crearAuto</button>
        </Link>
        <Link to="/crear-reparacion">
          <button className="btn-accion">crearReparacion</button>
        </Link>
        <Link to="/crear-reporte-a">
          <button className="btn-accion">crearReporteA</button>
        </Link>
      </div>
    </div>
  );
};

export default PaginaPrincipal;

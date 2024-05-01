import React from 'react';
import { Link } from 'react-router-dom';

const PaginaPrincipal = () => {
  return (
    <div className="pagina-principal">
      <h1>tingeso1</h1>
      <div className="acciones-menu">
        <Link to="/crear-auto">
          <button className="btn-accion">crearAuto</button>
        </Link>
      </div>
    </div>
  );
};

export default PaginaPrincipal;

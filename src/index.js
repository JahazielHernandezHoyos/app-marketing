import React from 'react';
import ReactDOM from 'react-dom';
import Inicio from "./pages/Inicio";

ReactDOM.render(
  <React.StrictMode>
    {/* crea las rutas de Inicio y configuracion*/}
    <Inicio />
  </React.StrictMode>,
  document.getElementById('root')
);


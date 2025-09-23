import React from 'react';
import BotonPago from './BotonPago';

const PagosHome: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Submódulo: Pagos</h2>
      <p>Este submódulo contiene ejemplos y componentes para:</p>
      <ul>
        <li>Botón de pago</li>
        <li>Link de pago móvil</li>
        <li>Recarga y pago de servicios</li>
        <li>Documentación API</li>
      </ul>
      <hr />
      <BotonPago />
    </div>
  );
};

export default PagosHome;

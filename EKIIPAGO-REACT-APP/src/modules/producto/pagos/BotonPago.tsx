import React from 'react';

const BotonPago: React.FC = () => {
  const handleClick = () => {
    // Ejemplo: abrir un modal o redirigir al flujo de pago
    alert('Simulación: iniciar flujo de Botón de Pago');
  };

  return (
    <div className="producto-modulo">
      <h3>Botón de pago</h3>
      <p>Integra este botón para recibir pagos desde tu página.</p>
      <button onClick={handleClick}>Pagar ahora</button>
    </div>
  );
};

export default BotonPago;

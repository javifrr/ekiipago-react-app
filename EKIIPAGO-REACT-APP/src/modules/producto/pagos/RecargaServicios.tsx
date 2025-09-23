import React from 'react';

const RecargaServicios: React.FC = () => {
  const handleRecarga = () => {
    alert('Simulación: recarga / pago de servicios iniciada');
  };

  return (
    <div className="producto-modulo">
      <h3>Recarga y pago de servicios</h3>
      <p>Conecta a operadoras para recargas y pago de servicios.</p>
      <button onClick={handleRecarga}>Iniciar recarga</button>
    </div>
  );
};

export default RecargaServicios;

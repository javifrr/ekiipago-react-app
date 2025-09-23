import React from 'react';

const ApiDocs: React.FC = () => {
  return (
    <div className="producto-modulo">
      <h3>Documentación API</h3>
      <p>Enlace y resumen de endpoints para integrar pagos con Ekiipago.</p>
      <ul>
        <li>POST /api/payments - Crear pago</li>
        <li>GET /api/payments/:id - Consultar estado</li>
        <li>POST /api/recargas - Iniciar recarga</li>
      </ul>
      <p>Para más detalles consulta la documentación completa en el portal.</p>
    </div>
  );
};

export default ApiDocs;

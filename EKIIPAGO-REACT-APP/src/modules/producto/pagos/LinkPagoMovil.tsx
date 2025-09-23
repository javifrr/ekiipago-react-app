import React from 'react';

const LinkPagoMovil: React.FC = () => {
  const generarLink = () => {
    // Ejemplo: generar link y copiar al portapapeles
    const url = 'https://pay.ekiipago.com/checkout?amount=10&ref=demo';
    navigator.clipboard?.writeText(url);
    alert('Link de pago generado y copiado:\n' + url);
  };

  return (
    <div className="producto-modulo">
      <h3>Link de Pago Móvil</h3>
      <p>Genera un link de pago para enviar por Whatsapp, correo o redes.</p>
      <button onClick={generarLink}>Generar link</button>
    </div>
  );
};

export default LinkPagoMovil;

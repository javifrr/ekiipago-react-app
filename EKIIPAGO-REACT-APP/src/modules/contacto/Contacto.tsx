import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './Contacto.css';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    const value = e.target.type === 'checkbox' && e.target instanceof HTMLInputElement ? e.target.checked : e.target.value;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
  };

  return (
    <>
      <Helmet>
        <title>Contacto - EKIIPAGO</title>
        <meta name="description" content="Contacta con EKIIPAGO para obtener más información sobre nuestras soluciones de pago digital en Venezuela. Rellena el formulario o llámanos. ¡Estamos para ayudarte!" />
        <meta name="keywords" content="contacto, ekiipago, venezuela, soporte, ventas, formulario de contacto" />
        <link rel="canonical" href="https://www.ekiipago.com/contacto/" />
        <meta property="og:title" content="Contacto - EKIIPAGO" />
        <meta property="og:description" content="Contacta con EKIIPAGO para obtener más información sobre nuestras soluciones de pago digital en Venezuela." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ekiipago.com/contacto/" />
      </Helmet>
      <div className="contacto-container">
        <div className="contacto-header">
          <h1>Contacto</h1>
          <h2>¡Hablemos!</h2>
          <p>Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.</p>
        </div>

        <div className="contacto-content">
          <div className="contacto-info">
            <h3>Información de Contacto</h3>
            <IconContext.Provider value={{ className: "contacto-icon" }}>
              <p><FaEnvelope /> <a href="mailto:info@ekiipago.com">info@ekiipago.com</a></p>
              <p><FaPhoneAlt /> <a href="tel:+34650185695">+34 650 185 695</a></p>
              <p><FaMapMarkerAlt /> Alicante, España</p>
            </IconContext.Provider>
          </div>

          <div className="contacto-form-wrapper">
            <h3>Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
              </div>
              <div className="form-group-checkbox">
                <input type="checkbox" id="privacy" name="privacy" checked={formData.privacy} onChange={handleChange} required />
                <label htmlFor="privacy">He leído y acepto la <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer">política de privacidad</a> *</label>
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;

import React from 'react';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Quiénes Somos - EKIIPAGO</title>
        <meta name="description" content="Conoce la historia, misión y visión de EKIIPAGO, la empresa líder en soluciones de pagos digitales en Venezuela. Descubre nuestro equipo y nuestros valores." />
        <meta name="keywords" content="quiénes somos, ekiipago, historia, misión, visión, equipo, valores, venezuela" />
        <link rel="canonical" href="https://www.ekiipago.com/quienes-somos/" />
        <meta property="og:title" content="Quiénes Somos - EKIIPAGO" />
        <meta property="og:description" content="Conoce la historia, misión y visión de EKIIPAGO, la empresa líder en soluciones de pagos digitales en Venezuela." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ekiipago.com/quienes-somos/" />
        <meta property="og:image" content="https://www.ekiipago.com/wp-content/uploads/2023/03/ekiioago-blanco-amarillo.svg" />
      </Helmet>
      <div className="about-container">
        <h2>Sobre Nosotros</h2>
        <p>Aquí puedes aprender más sobre nuestra empresa.</p>
      </div>
    </>
  );
};

export default About;

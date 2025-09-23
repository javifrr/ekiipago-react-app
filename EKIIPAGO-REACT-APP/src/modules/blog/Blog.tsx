import React from 'react';
import './Blog.css';

const Blog: React.FC = () => {
  return (
    <div className="blog-container">
      <h2>Blog</h2>
      <p>Bienvenido a nuestro blog. Aquí encontrarás las últimas noticias y artículos.</p>
      {/* Aquí se pueden añadir más componentes para las entradas del blog */}
    </div>
  );
};

export default Blog;

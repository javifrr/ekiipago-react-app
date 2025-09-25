import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import type { BlogPost } from './types';
import './Blog.css';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://ekiipago.com/wp-json/wp/v2/posts?_embed');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog de Pagos Digitales y Fintech - EKIIPAGO</title>
        <meta name="description" content="Mantente al día con las últimas noticias, tendencias y consejos sobre pagos digitales, fintech y comercio electrónico en Venezuela con el blog de EKIIPAGO." />
        <meta name="keywords" content="blog, fintech, pagos digitales, venezuela, comercio electrónico, noticias, tendencias" />
        <link rel="canonical" href="https://www.ekiipago.com/blog-ekiipago/" />
        <meta property="og:title" content="Blog de Pagos Digitales y Fintech - EKIIPAGO" />
        <meta property="og:description" content="Mantente al día con las últimas noticias, tendencias y consejos sobre pagos digitales, fintech y comercio electrónico en Venezuela con el blog de EKIIPAGO." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ekiipago.com/blog-ekiipago/" />
      </Helmet>
      <div className="blog-container">
        <div className="blog-header">
          <h1>Blog EKIIPAGO</h1>
          <p>Noticias, consejos y tendencias sobre el mundo de los pagos y la tecnología financiera.</p>
        </div>

        {loading ? (
          <div className="loader">Cargando entradas...</div>
        ) : (
          <div className="blog-grid">
            {posts.map(post => (
              <div key={post.id} className="blog-post-card">
                {post._embedded && post._embedded['wp:featuredmedia'] && (
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="blog-post-image-link">
                    <img 
                      src={post._embedded['wp:featuredmedia'][0].source_url} 
                      alt={post.title.rendered} 
                      className="blog-post-image"
                    />
                  </a>
                )}
                <div className="blog-post-content">
                  <h2 className="blog-post-title">
                    <a href={post.link} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  </h2>
                  <div 
                    className="blog-post-excerpt" 
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.replace('[&hellip;]', '') }} 
                  />
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="read-more-link">
                    Leer Más
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;

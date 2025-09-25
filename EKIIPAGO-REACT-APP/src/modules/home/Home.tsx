import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Home.css';


// Interfaces TypeScript
interface Slide {
  title: string;
  link: string;
  buttonText: string;
}

interface Product {
  title: string;
  image: string;
  description: string;
  link: string;
  linkText: string;
}

// Componentes de la página Home
const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header id="main-header" data-height-onload="40">
      <div className="container clearfix et_menu_container">
        <div className="logo_container">
          <span className="logo_helper"></span>
          <a href="/">
            <img 
              src="https://www.ekiipago.com/wp-content/uploads/2023/03/ekiioago-blanco-amarillo.svg" 
              width="109" 
              height="30" 
              alt="ekiipago" 
              id="logo" 
              data-height-percentage="60" 
            />
          </a>
        </div>
        <div id="et-top-navigation" data-height="40" data-fixed-height="40">
          <nav id="top-menu-nav">
            <ul id="top-menu" className="nav">
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-182 current_page_item menu-item-319">
                <a href="/" aria-current="page">Inicio</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-323">
                <a href="#">Productos</a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-317">
                    <Link to="/boton-de-pago">Botón de pago</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1248">
                    <a href="https://ekiipago.com/link-de-pago-movil/">Link de Pago Móvil</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-322">
                    <a href="https://ekiipago.com/recarga-y-pago-de-servicios/">Recarga y pago de servicios</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-462">
                    <a href="https://ekiipago.com/documentacion-api/">Documentación API</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-316">
                <a href="https://ekiipago.com/quienes-somos/">Quiénes somos</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-318">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="de-menu-cta menu-item menu-item-type-post_type menu-item-object-page menu-item-117">
                <a href="https://ekiipago.com/contacto/">Contactar</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1339">
                <a href="https://botondepago.ekiipago.com/">Mi ekiipago</a>
              </li>
            </ul>
          </nav>
          
          <div id="et_mobile_nav_menu">
            <div className="mobile_nav closed">
              <span className="select_page">Seleccionar página</span>
              <span 
                className="mobile_menu_bar mobile_menu_bar_toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const HeroSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  
  const slides: Slide[] = [
    {
      title: "Solución de pagos digitales",
      link: "https://www.ekiipago.com/contacto/",
      buttonText: "Contactar"
    },
    {
      title: "Botón de pago",
      link: "https://www.ekiipago.com/boton-de-pago-ekiipago/",
      buttonText: "Ver más"
    },
    {
      title: "Conector de servicios",
      link: "https://www.ekiipago.com/recarga-y-pago-de-servicios/",
      buttonText: "Ver más"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="et_pb_section et_pb_section_0 et_pb_section_video et_pb_preload et_pb_with_background et_pb_fullwidth_section et_section_regular">
      <span className="et_pb_section_video_bg">
        <video loop autoPlay playsInline muted>
          <source type="video/mp4" src="https://www.ekiipago.com/wp-content/uploads/2023/04/hombre-trabajando-en-su-portatil.mp4" />
        </video>
      </span>
      
      <div className="et_pb_module et_pb_fullwidth_slider_0 et_pb_slider et_pb_slider_no_arrows et_pb_slider_no_pagination et_slider_auto et_slider_speed_5000 et_slider_auto_ignore_hover">
        <div className="et_pb_slides">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`et_pb_slide et_pb_slide_${index} et_pb_bg_layout_dark et_pb_media_alignment_center ${index === activeSlide ? 'et-pb-active-slide' : ''}`}
              data-slide-id={`et_pb_slide_${index}`}
            >
              <div className="et_pb_container clearfix">
                <div className="et_pb_slider_container_inner">
                  <div className="et_pb_slide_description">
                    <h2 className="et_pb_slide_title">
                      <a href={slide.link}>{slide.title}</a>
                    </h2>
                    <div className="et_pb_button_wrapper">
                      <a className="et_pb_button et_pb_more_button" href={slide.link}>
                        {slide.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductsSection: React.FC = () => {
  const products: Product[] = [
    {
      title: "Botón de pago",
      image: "https://www.ekiipago.com/wp-content/uploads/2023/04/jonas-leupe-wK-elt11pF0-unsplash.webp",
      description: "¿Quieres vender algún producto en tu página web? ¡Conviértela en una tienda en línea y recibe pagos en minutos integrando fácilmente nuestro botón de pago en tu página web o app móvil!",
      link: "https://www.ekiipago.com/boton-de-pago-ekiipago/",
      linkText: "Ver más"
    },
    {
      title: "Link de pago móvil",
      image: "https://www.ekiipago.com/wp-content/uploads/2023/05/women-s-hands-holding-cell-telep.webp",
      description: "¿Quieres cobrar tus productos o servicios en un click? Con un link de pago puedes cobrar las facturas de productos y servicios desde las RRSS, correo o Whatsapp.",
      link: "https://www.ekiipago.com/link-de-pago-movil/",
      linkText: "Ver más"
    },
    {
      title: "Conector de servicios",
      image: "https://www.ekiipago.com/wp-content/uploads/2023/04/ruthson-zimmerman-JfB_yZ7YxLc-un.webp",
      description: "¿Buscas generar ingresos desde tu web o app móvil? ¡Conéctalas con operadoras telefónicas y empresas de servicios para que tus clientes puedan realizar sus pagos y recargas!",
      link: "https://www.ekiipago.com/recarga-y-pago-de-servicios/",
      linkText: "Ver más"
    }
  ];

  return (
    <div className="et_pb_section et_pb_section_2 et_pb_with_background et_pb_section_parallax et_section_regular">
      <div className="et_pb_row et_pb_row_1">
        <div className="et_pb_column et_pb_column_4_4 et_pb_column_2 et_pb_css_mix_blend_mode_passthrough et-last-child">
          <div className="et_pb_module et_pb_text et_pb_text_2 et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <h2 id="Productosekiipago">Productos ekiipago</h2>
            </div>
          </div>
          <div className="et_pb_module et_pb_text et_pb_text_3 et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <p>Sin importar la solución de pago digital que necesite tu negocio o próximo proyecto, en ekiipago conseguirás la mejor alternativa para comenzar a recibir pagos de manera digital.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="et_pb_row et_pb_row_2 gq_r_fijar_botones et_pb_equal_columns">
        {products.map((product, index) => (
          <div key={index} className="et_pb_column et_pb_column_1_3 et_pb_column_3 et_pb_css_mix_blend_mode_passthrough">
            <div className="et_pb_module et_pb_text et_pb_text_4 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h3 style={{ textAlign: "center" }}>{product.title}</h3>
              </div>
            </div>
            <div className="et_pb_module et_pb_image et_pb_image_1 et_pb_image_sticky">
              <span className="et_pb_image_wrap">
                <img 
                  loading="lazy" 
                  decoding="async" 
                  width="640" 
                  height="427" 
                  src={product.image} 
                  alt={product.title}
                  className="wp-image-770" 
                />
              </span>
            </div>
            <div className="et_pb_module et_pb_text et_pb_text_5 et_pb_text_align_center et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>{product.description}</p>
              </div>
            </div>
            <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_center et_pb_module">
              <a className="et_pb_button et_pb_button_0 et_pb_bg_layout_light" href={product.link}>
                {product.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BeneficiosSection: React.FC = () => {
  const beneficios = [
    {
      title: 'SEGURIDAD',
      description: 'Implementamos continuamente los métodos más avanzados en manejo de información, garantizando que nuestras soluciones sean robustas y estables. Con esto aseguramos los datos transaccionales sin afectar la operación de tu empresa.',
    },
    {
      title: 'RAPIDEZ',
      description: 'Podrás hacer transacciones rápidas y manejar pagos en minutos.',
    },
    {
      title: 'COMODIDAD',
      description: 'Con nuestras soluciones tus clientes podrán realizar pagos al alcance de un clic sin necesidad de ir a comercios, bancos o instituciones.',
    },
    {
      title: 'AL DÍA CON LAS REGULACIONES',
      description: 'Contamos con todos los permisos legales para que puedas comenzar a operar tus transacciones con nosotros sin ningún tipo de preocupación.',
    },
  ];

  return (
    <div className="et_pb_section et_pb_section_3 et_section_regular">
      <div className="et_pb_row et_pb_row_3">
        <div className="et_pb_column et_pb_column_4_4 et_pb_column_9 et_pb_css_mix_blend_mode_passthrough et-last-child">
          <div className="et_pb_module et_pb_text et_pb_text_7 et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <h2>Beneficios de ekiipago</h2>
              <p>En ekiipago, como proveedores de soluciones de pagos digitales, queremos ofrecerles a nuestros clientes la mayor confianza y soporte posible. Es por eso que al formar parte de nuestra red de aliados y clientes contarás con los siguientes beneficios:</p>
            </div>
          </div>
        </div>
      </div>
      <div className="et_pb_row et_pb_row_4">
        {beneficios.map((beneficio, index) => (
          <div key={index} className="et_pb_column et_pb_column_1_4 et_pb_column_10 et_pb_css_mix_blend_mode_passthrough">
            <div className="et_pb_module et_pb_text et_pb_text_8 et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <h3>{beneficio.title}</h3>
                <p>{beneficio.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CasosExitoSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Rosa Ruíz',
      title: 'Directora de producto y tecnología de HolaDOC',
      text: '«El proceso con Ekiipago fue fluido. La información fue clara y recibimos un gran apoyo y asesoría del equipo, lo que hizo todo mucho más fácil. Recomiendo Ekiipago a cualquier empresa que busque soluciones de pago.»',
      image: 'https://ekiipago.com/wp-content/uploads/2024/08/RosaRuizekii.png',
    },
    {
      name: 'Carlos Castillo',
      title: 'Coordinador de la Plataforma RUAP',
      text: '“Para nosotros el botón de pago de ekiipago es el integrador perfecto entre nuestro sistema de contadores agremiados y el Banco, con un servicio 24×7”.',
      image: 'https://ekiipago.com/wp-content/uploads/2023/04/foto-Carlos-Castillo-1-480x480.webp',
    },
  ];

  return (
    <div className="et_pb_section et_pb_section_4 et_section_regular">
      <div className="et_pb_row et_pb_row_5">
        <div className="et_pb_column et_pb_column_4_4 et_pb_column_14 et_pb_css_mix_blend_mode_passthrough et-last-child">
          <div className="et_pb_module et_pb_text et_pb_text_12 et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <h2>Casos de éxito de ekiipago</h2>
              <p>Nada mejor que la experiencia de nuestros clientes y aliados para descubras y te decidas por todas las ventajas y beneficios que tendrá tu negocio al implementar nuestras soluciones de pagos digitales en él.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="et_pb_row et_pb_row_6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="et_pb_column et_pb_column_1_2 et_pb_column_15 et_pb_css_mix_blend_mode_passthrough">
            <div className="et_pb_module et_pb_testimonial et_pb_testimonial_0 clearfix et_pb_text_align_left et_pb_bg_layout_light et_pb_icon_off">
              <div className="et_pb_testimonial_portrait" style={{ backgroundImage: `url(${testimonial.image})` }}></div>
              <div className="et_pb_testimonial_description">
                <div className="et_pb_testimonial_description_inner">
                  <p>{testimonial.text}</p>
                  <strong className="et_pb_testimonial_author">{testimonial.name}</strong>
                  <em className="et_pb_testimonial_meta">{testimonial.title}</em>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: 'Del efectivo al clic',
      link: 'https://ekiipago.com/del-efectivo-al-clic/',
    },
    {
      title: 'Más allá del producto: Cómo una experiencia de pago excepcional impulsa tus ventas',
      link: 'https://ekiipago.com/mas-alla-del-producto-como-una-experiencia-de-pago-excepcional-impulsa-tus-ventas/',
    },
    {
      title: '¿Tu negocio es rentable o solo popular?',
      link: 'https://ekiipago.com/tu-negocio-es-rentable-o-solo-popular/',
    },
  ];

  return (
    <div className="et_pb_section et_pb_section_5 et_section_regular">
      <div className="et_pb_row et_pb_row_7">
        <div className="et_pb_column et_pb_column_4_4 et_pb_column_17 et_pb_css_mix_blend_mode_passthrough et-last-child">
          <div className="et_pb_module et_pb_text et_pb_text_13 et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <h2>Blog ekiipago</h2>
              <p>El mundo de los pagos digitales, ya sea en un e-commerce, app móvil o página web de cobro de servicios está en constante evolución. Y aquí siempre estarás al tanto de las últimas noticias relacionadas con todo lo que tenga que ver con hacer y recibir pagos digitales.</p>
            </div>
          </div>
          <div className="et_pb_module et_pb_blog_0 et_pb_posts_blog_grid_wrap">
            <div className="et_pb_posts et_pb_blog_grid clearfix">
              {blogPosts.map((post, index) => (
                <article key={index} className="et_pb_post">
                  <h2 className="entry-title"><a href={post.link}>{post.title}</a></h2>
                </article>
              ))}
            </div>
          </div>
          <div className="et_pb_button_module_wrapper et_pb_button_1_wrapper et_pb_button_alignment_center et_pb_module">
            <a className="et_pb_button et_pb_button_1 et_pb_bg_layout_light" href="https://www.ekiipago.com/blog-ekiipago/">Ir a blog ekiipago</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const AliadosClientesSection: React.FC = () => {
  const aliados = [
    'https://www.ekiipago.com/wp-content/uploads/2023/03/movistar.webp',
    'https://www.ekiipago.com/wp-content/uploads/2023/03/movilway.webp',
    'https://ekiipago.com/wp-content/uploads/2024/03/inter-1-03.png',
    'https://www.ekiipago.com/wp-content/uploads/2023/03/digitel.webp',
    'https://www.ekiipago.com/wp-content/uploads/2023/03/gre5.webp',
  ];

  const clientes = [
    'https://www.ekiipago.com/wp-content/uploads/2023/04/logo-bancaribe.webp',
    'https://www.ekiipago.com/wp-content/uploads/2023/04/logo-banplus.webp',
    'https://www.ekiipago.com/wp-content/uploads/2023/03/fonfo-comun.webp',
    'https://www.ekiipago.com/wp-content/uploads/2023/03/banco-caroni.webp',
    'https://www.ekiipago.com/wp-content/uploads/2023/03/bancrecer.webp',
  ];

  return (
    <div className="et_pb_section et_pb_section_6 et_section_regular">
      <div className="et_pb_row et_pb_row_8">
        <div className="et_pb_column et_pb_column_4_4 et_pb_column_18 et_pb_css_mix_blend_mode_passthrough et-last-child">
          <div className="et_pb_module et_pb_text et_pb_text_14 et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <h2>Aliados y clientes ekiipago</h2>
              <p>Las empresas de telecomunicación y los bancos más importantes de Venezuela forman parte de nuestros clientes y aliados. ¿Qué esperas para integrar ya nuestros servicios de pagos y cobros online en tu plataforma?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="et_pb_row et_pb_row_9">
        <div className="et_pb_column et_pb_column_4_4 et_pb_column_19 et_pb_css_mix_blend_mode_passthrough et-last-child">
          <div className="et_pb_module et_pb_text et_pb_text_15 et_pb_text_align_center et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <h4>Aliados ekiipago</h4>
            </div>
          </div>
          <div className="et_pb_module et_pb_gallery_0 et_pb_gallery_grid">
            <div className="et_pb_gallery_items et_post_gallery">
              {aliados.map((aliado, index) => (
                <div key={index} className="et_pb_gallery_item">
                  <div className="et_pb_gallery_image landscape">
                    <img src={aliado} alt="aliado" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="et_pb_row et_pb_row_10">
        <div className="et_pb_column et_pb_column_4_4 et_pb_column_20 et_pb_css_mix_blend_mode_passthrough et-last-child">
          <div className="et_pb_module et_pb_text et_pb_text_16 et_pb_text_align_center et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <h4>Clientes ekiipago</h4>
            </div>
          </div>
          <div className="et_pb_module et_pb_gallery_1 et_pb_gallery_grid">
            <div className="et_pb_gallery_items et_post_gallery">
              {clientes.map((cliente, index) => (
                <div key={index} className="et_pb_gallery_item">
                  <div className="et_pb_gallery_image landscape">
                    <img src={cliente} alt="cliente" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Footer: React.FC = () => {
  return (
    <footer className="et-l et-l--footer">
      <div className="et_builder_inner_content et_pb_gutters3">
        <div className="et_pb_section et_pb_section_0_tb_footer et_pb_with_background et_section_regular">
          <div className="et_pb_row et_pb_row_0_tb_footer">
            <div className="et_pb_column et_pb_column_1_3 et_pb_column_0_tb_footer et_pb_css_mix_blend_mode_passthrough">
              <div className="et_pb_module et_pb_image et_pb_image_0_tb_footer">
                <span className="et_pb_image_wrap">
                  <img 
                    loading="lazy" 
                    decoding="async" 
                    width="109" 
                    height="30" 
                    src="https://www.ekiipago.com/wp-content/uploads/2023/03/ekiioago-blanco-amarillo.svg" 
                    alt="" 
                    className="wp-image-31" 
                  />
                </span>
              </div>
              <div className="et_pb_module et_pb_text et_pb_text_0_tb_footer et_pb_text_align_left et_pb_bg_layout_light">
                <div className="et_pb_text_inner">
                  <p>
                    <span>Calle Altagracia, Edif. P&amp;G,</span>
                    <br />
                    <span>torre Este, piso 1, Urb.</span>
                    <br />
                    <span>Sorokaima, La Trinidad,</span>
                    <br />
                    <span>municipio Baruta, Edo. Miranda.</span>
                  </p>
                  <p><span>+58 412-6174329</span></p>
                  <p><span>contacto@ekiipago.com</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>EKIIPAGO - Soluciones de Pagos Digitales en Venezuela</title>
        <meta name="description" content="Ekiipago ofrece soluciones de pagos digitales para tu negocio en Venezuela. Integra botón de pago, link de pago y más. ¡Aumenta tus ventas online de forma segura y fácil!" />
        <meta name="keywords" content="pagos digitales, Venezuela, botón de pago, link de pago, pasarela de pago, ecommerce, ventas en línea" />
        <link rel="canonical" href="https://www.ekiipago.com/" />
        <meta property="og:title" content="EKIIPAGO - Soluciones de Pagos Digitales en Venezuela" />
        <meta property="og:description" content="Ekiipago ofrece soluciones de pagos digitales para tu negocio en Venezuela. Integra botón de pago, link de pago y más. ¡Aumenta tus ventas online de forma segura y fácil!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ekiipago.com/" />
        <meta property="og:image" content="https://www.ekiipago.com/wp-content/uploads/2023/03/ekiioago-blanco-amarillo.svg" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EKIIPAGO",
              "url": "https://www.ekiipago.com/",
              "logo": "https://www.ekiipago.com/wp-content/uploads/2023/03/ekiioago-blanco-amarillo.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+58-412-6174329",
                "contactType": "Customer Service",
                "email": "contacto@ekiipago.com"
              },
              "sameAs": [
                "https://twitter.com/ekiipago",
                "https://www.instagram.com/ekiipago/",
                "https://www.linkedin.com/showcase/ekiipago/",
                "https://www.youtube.com/@ekiipago7179"
              ]
            }
          `}
        </script>
      </Helmet>
      <div className="Home" data-rsssl="1">
        <div id="page-container">
          <div id="et-boc" className="et-boc">
            <Header />
            <div id="et-main-area">
              <div id="main-content">
                <article id="post-182" className="post-182 page type-page status-publish hentry">
                  <div className="entry-content">
                    <div className="et-l et-l--post">
                      <div className="et_builder_inner_content et_pb_gutters3">
                        <HeroSlider />
                        <ProductsSection />
                        <BeneficiosSection />
                        <CasosExitoSection />
                        <BlogSection />
                        <AliadosClientesSection />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
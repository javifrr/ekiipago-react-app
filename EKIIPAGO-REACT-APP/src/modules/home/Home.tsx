import React, { useState, useEffect } from 'react';
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
                    <a href="https://ekiipago.com/boton-de-pago-ekiipago/">Botón de pago</a>
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
                <a href="https://ekiipago.com/blog-ekiipago/">Blog</a>
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
  );
};

export default Home;
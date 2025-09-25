import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './DocumentacionApi.css';

const DocumentacionApi: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Documentación API - EKIIPAGO</title>
        <meta name="description" content="Encuentra la documentación completa para integrar las APIs de EKIIPAGO: Botón de Pago, Recargas (Digitel, Inter) y más. Empieza a construir hoy." />
        <meta name="keywords" content="documentación api, api, ekiipago, botón de pago, digitel, inter, integración" />
        <link rel="canonical" href="https://www.ekiipago.com/documentacion-api/" />
        <meta property="og:title" content="Documentación API - EKIIPAGO" />
        <meta property="og:description" content="Encuentra la documentación completa para integrar las APIs de EKIIPAGO: Botón de Pago, Recargas (Digitel, Inter) y más." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ekiipago.com/documentacion-api/" />
      </Helmet>
      <div className="page-container">
        <Header />
        <main id="main-content">
          <ApiSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

const Header: React.FC = () => (
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
            <li className="menu-item">
              <Link to="/">Inicio</Link>
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#">Productos</a>
              <ul className="sub-menu">
                <li className="menu-item">
                  <Link to="/boton-de-pago">Botón de pago</Link>
                </li>
                <li className="menu-item">
                  <Link to="/link-de-pago-movil">Link de Pago Móvil</Link>
                </li>
                <li className="menu-item">
                  <Link to="/recarga-y-pago-de-servicios">Recarga y pago de servicios</Link>
                </li>
                <li className="menu-item">
                  <Link to="/documentacion-api">Documentación API</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link to="/quienes-somos">Quiénes somos</Link>
            </li>
            <li className="menu-item">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="de-menu-cta menu-item">
              <a href="https://ekiipago.com/contacto/">Contactar</a>
            </li>
            <li className="menu-item">
              <a href="https://botondepago.ekiipago.com/">Mi ekiipago</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

const ApiSection: React.FC = () => (
  <div className="et_pb_section et_pb_section_0 et_section_regular">
    <div className="et_pb_row et_pb_row_0">
      <div className="et_pb_column et_pb_column_4_4 et_pb_column_0">
        <div className="et_pb_text et_pb_text_0">
          <div className="et_pb_text_inner">
            <h1>APIs</h1>
            <ul>
              <li><a href="https://www.ekiipago.com/api-boton-de-pago/">API Botón de pago</a></li>
              <li><a href="https://www.ekiipago.com/api-inter-prepago-y-postpago/">API Inter Prepago y Postpago</a></li>
              <li><a href="https://www.ekiipago.com/api-digitel-prepago/">API Digitel Prepago</a></li>
              <li><a href="https://www.ekiipago.com/api-digitel-postpago/">API Digitel Postpago</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer: React.FC = () => (
    <footer className="et-l et-l--footer">
    <div className="et_builder_inner_content et_pb_gutters3">
      <section className="et_pb_section et_pb_section_0_tb_footer et_pb_with_background et_section_regular">
        <div className="et_pb_row et_pb_row_0_tb_footer">
          <div className="et_pb_column et_pb_column_1_3 et_pb_column_0_tb_footer et_pb_css_mix_blend_mode_passthrough">
            <div className="et_pb_module et_pb_image et_pb_image_0_tb_footer">
              <span className="et_pb_image_wrap">
                <img 
                  decoding="async"
                  width="109"
                  height="30"
                  src="https://www.ekiipago.com/wp-content/uploads/2023/03/ekiioago-blanco-amarillo.svg"
                  alt="ekiipago"
                  title="ekiioago-blanco-amarillo"
                  className="wp-image-31"
                />
              </span>
            </div>
            
            <div className="et_pb_module et_pb_text et_pb_text_0_tb_footer et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>
                  <span>Calle Altagracia, Edif. P&G,</span>
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
          
          <div className="et_pb_column et_pb_column_1_3 et_pb_column_1_tb_footer et_pb_css_mix_blend_mode_passthrough">
            <div className="et_pb_module et_pb_text et_pb_text_1_tb_footer et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>PRODUCTOS</p>
              </div>
            </div>
            
            <div className="et_pb_module et_pb_text et_pb_text_2_tb_footer et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p><Link to="/boton-de-pago">Botón de Pago</Link></p>
                <p><Link to="/recarga-y-pago-de-servicios">Recargas y pagos de servicios</Link></p>
                <p><Link to="/documentacion-api">Documentación API</Link></p>
              </div>
            </div>
          </div>
          
          <div className="et_pb_column et_pb_column_1_3 et_pb_column_2_tb_footer et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div className="et_pb_module et_pb_text et_pb_text_3_tb_footer et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>La Empresa</p>
              </div>
            </div>
            
            <div className="et_pb_module et_pb_text et_pb_text_4_tb_footer et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p><Link to="/quienes-somos">Quiénes somos</Link></p>
                <p><a href="https://www.ekiipago.com/blog-ekiipago/">Blog ekiipago</a></p>
                <p><a href="https://www.ekiipago.com/contacto/">Contacto</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </footer>
);

export default DocumentacionApi;

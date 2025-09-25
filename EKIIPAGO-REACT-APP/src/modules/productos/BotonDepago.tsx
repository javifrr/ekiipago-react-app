import React from 'react';
import { Link } from 'react-router-dom';
import './BotonDePago.css';
import { Helmet } from 'react-helmet-async';

const BotonDePago: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Botón de Pago para Ecommerce en Venezuela - EKIIPAGO</title>
        <meta name="description" content="Integra el Botón de Pago de EKIIPAGO en tu ecommerce o app y recibe pagos en línea de forma fácil y segura en Venezuela. Aumenta tus ventas con nuestra solución B2B." />
        <meta name="keywords" content="botón de pago, Venezuela, ecommerce, tienda en línea, pagos en línea, pasarela de pago, B2B" />
        <link rel="canonical" href="https://www.ekiipago.com/boton-de-pago/" />
        <meta property="og:title" content="Botón de Pago para Ecommerce en Venezuela - EKIIPAGO" />
        <meta property="og:description" content="Integra el Botón de Pago de EKIIPAGO en tu ecommerce o app y recibe pagos en línea de forma fácil y segura en Venezuela." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ekiipago.com/boton-de-pago/" />
        <meta property="og:image" content="https://ekiipago.com/wp-content/uploads/2023/04/portrait-attractive-smiling-youn.webp" />
      </Helmet>
      <div className="page-container">
        <Header />
        <main id="main-content">
          <HeroSection />
          <QueEsSection />
          <ComoFuncionaSection />
          <BeneficiosSection />
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
                  <a href="https://ekiipago.com/link-de-pago-movil/">Link de Pago Móvil</a>
                </li>
                <li className="menu-item">
                  <a href="https://ekiipago.com/recarga-y-pago-de-servicios/">Recarga y pago de servicios</a>
                </li>
                <li className="menu-item">
                  <a href="https://ekiipago.com/documentacion-api/">Documentación API</a>
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

const HeroSection: React.FC = () => (
  <div className="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular">
    <div className="et_pb_row et_pb_row_0">
      <div className="et_pb_column et_pb_column_1_2 et_pb_column_0">
        <div className="et_pb_text et_pb_text_0">
          <div className="et_pb_text_inner">
            <h1>Botón de pago</h1>
            <p>El botón de pago de ekiipago es una solución para negocios B2B que te permitirá recibir pagos en tu tienda en línea o e-commerce, app móvil, software administrativos o canal digital que soporten tecnología API/REST, aumentando así tus ventas al recibir pagos de manera muy sencilla para ti y tus clientes.</p>
            <h3>¡Comienza a recibir pagos en línea con el botón de pago de ekiipago!</h3>
          </div>
        </div>
      </div>
      <div className="et_pb_column et_pb_column_1_2 et_pb_column_1">
        <div className="et_pb_image et_pb_image_0">
          <span className="et_pb_image_wrap">
            <img src="https://ekiipago.com/wp-content/uploads/2023/04/portrait-attractive-smiling-youn.webp" alt="Joven sonriendo mientras observa su móvil" />
          </span>
        </div>
      </div>
    </div>
  </div>
);

const QueEsSection: React.FC = () => (
  <div className="et_pb_section et_pb_section_1 et_section_regular">
    <div className="et_pb_row et_pb_row_1">
      <div className="et_pb_column et_pb_column_4_4 et_pb_column_2">
        <div className="et_pb_text et_pb_text_1">
          <div className="et_pb_text_inner">
            <h2>¿Qué es un botón de pago?</h2>
            <p>Un botón de pago es la mejor alternativa con la que puedes contar si deseas que tus clientes puedan realizar, desde cualquier lugar del mundo, pagos en tu página web, app móvil, software administrativos o canales digitales que soporten tecnología API/REST.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="et_pb_row et_pb_row_2">
        <div className="et_pb_column et_pb_column_1_2">
            <h3>¿Cómo cobrar por mis servicios en mi página web?</h3>
            <p>El proceso es muy sencillo tanto para ti como para tu cliente. Como en cualquier e-commerce, tu cliente agregará el producto que seleccione al carrito de compras. Luego, al proceder a realizar el pago, tendrá un botón de pago con la opción de pago móvil. Sólo tendrá que introducir su número de teléfono y cédula de identidad, realizar el pago en su banco de preferencia y confirmar la compra en tu página web, aplicación móvil o administrativa.</p>
        </div>
        <div className="et_pb_column et_pb_column_1_2">
            <h3>¿Cómo colocar el botón de pago en mi e-commerce o página web?</h3>
            <p>El proceso para colocar o integrar el botón de pago en tu página web es sumamente sencillo. <a href="https://www.ekiipago.com/api-boton-de-pago/">Aquí encontrarás toda la información</a> necesaria para hacerlo. Y puedes comunicarte con nosotros en todo momento para ayudarte a integrar el botón de pago en tu página web, aplicación móvil o administrativa.</p>
        </div>
    </div>
    <div className="et_pb_row et_pb_row_3">
        <div className="et_pb_column et_pb_column_1_2">
            <h3>¿Qué precio tiene agregar el botón de pago en mi e-commerce o página web?</h3>
            <p>Agregar el botón de pago en tu página web para poder recibir pagos en línea es totalmente gratis. Posteriormente cobraremos una pequeña comisión en cada una de tus ventas realizadas a través del botón de pago.</p>
        </div>
        <div className="et_pb_column et_pb_column_1_2">
            <h3>¿Puedo cobrar en moneda extranjera en mi página web?</h3>
            <p>¡Claro que sí! Tus clientes pueden realizar el pago en tu página web en moneda extranjera siempre que estén afiliados al servicio Pago Móvil de algunos de nuestros bancos aliados. Nuestro sistema realizará automáticamente la conversión de precios a moneda nacional.</p>
        </div>
    </div>
  </div>
);

const ComoFuncionaSection: React.FC = () => (
  <div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
    <div className="et_pb_row et_pb_row_4">
      <div className="et_pb_column et_pb_column_1_2 et_pb_column_5">
        <div className="et_pb_text et_pb_text_2">
          <div className="et_pb_text_inner">
            <h2>¿Cómo funciona el Botón de Pago de ekiipago?</h2>
            <p>El funcionamiento del botón de pago es sumamente sencillo. Te invitamos a hacer click en el siguiente botón, donde verás, en menos de 1 minuto, lo fácil que será para tus clientes realizar pagos en tu ecommerce con el botón de pago de ekiipago.</p>
            <div className="et_pb_button_module_wrapper">
              <a className="et_pb_button" href="#">Ver explicación</a>
            </div>
          </div>
        </div>
      </div>
      <div className="et_pb_column et_pb_column_1_2 et_pb_column_6">
        <div className="et_pb_image et_pb_image_1">
          <img src="https://ekiipago.com/wp-content/uploads/2023/03/pexels-karolina-grabowska-5650028-980x1470.webp" alt="mano sujetando miniatura de carrito de supermercado" />
        </div>
      </div>
    </div>
  </div>
);

const BeneficiosSection: React.FC = () => {
    const bancos = [
        "https://www.ekiipago.com/wp-content/uploads/2023/03/banco-plaza.webp",
        "https://www.ekiipago.com/wp-content/uploads/2023/04/logo-bancaribe.webp",
        "https://www.ekiipago.com/wp-content/uploads/2023/03/bancrecer.webp",
        "https://www.ekiipago.com/wp-content/uploads/2023/03/avtivo-banco-universal.webp"
    ];

    return (
        <div className="et_pb_section et_pb_section_3 et_section_regular">
            <div className="et_pb_row">
                <div className="et_pb_column et_pb_column_4_4">
                    <h2>Beneficios del botón de pago</h2>
                    <ul>
                        <li>Facilitar a tus clientes realizar los pagos de productos y servicios</li>
                        <li>Nuestra solución realiza la validación de pago en línea y conversión a tasa BCV</li>
                        <li>Damos acceso a los administradores de los comercios de una aplicación administradora que facilita la conciliación y validación de transacciones</li>
                        <li>Nuestra soluciones son sin costo y de fácil integración</li>
                    </ul>
                </div>
            </div>
            <div className="et_pb_row">
                <div className="et_pb_column et_pb_column_4_4">
                    <h3>¿Qué necesitas para integrar nuestra solución para empresas B2B?</h3>
                    <div className="requirements">
                        <div>
                            <img src="https://www.ekiipago.com/wp-content/uploads/2023/04/stamp-1.webp" alt="RIF" />
                            <p>RIF jurídico y documentación de la empresa</p>
                        </div>
                        <div>
                            <img src="https://www.ekiipago.com/wp-content/uploads/2023/04/bank-1-150x150.png" alt="Banco" />
                            <p>Tener una cuenta en nuestros Bancos Aliados</p>
                        </div>
                        <div>
                            <img src="https://www.ekiipago.com/wp-content/uploads/2023/04/data-processing.webp" alt="Integracion" />
                            <p>Integrarse con nuestra plataforma de ekiipago</p>
                        </div>
                        <div>
                            <img src="https://www.ekiipago.com/wp-content/uploads/2023/04/social-media.webp" alt="Promocion" />
                            <p>Promocionar tu nuevo servicio de pago digital</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="et_pb_row">
                <div className="et_pb_column et_pb_column_4_4">
                    <h4>Bancos aliados</h4>
                    <div className="bancos-logos">
                        {bancos.map((banco, index) => (
                            <img key={index} src={banco} alt="banco aliado" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

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
          
          <div className="et_pb_column et_pb_column_1_3 et_pb_column_1_tb_footer et_pb_css_mix_blend_mode_passthrough">
            <div className="et_pb_module et_pb_text et_pb_text_1_tb_footer et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p>PRODUCTOS</p>
              </div>
            </div>
            
            <div className="et_pb_module et_pb_text et_pb_text_2_tb_footer et_pb_text_align_left et_pb_bg_layout_light">
              <div className="et_pb_text_inner">
                <p><Link to="/boton-de-pago">Botón de Pago</Link></p>
                <p><a href="https://www.ekiipago.com/recarga-y-pago-de-servicios/">Recargas y pagos de servicios</a></p>
                <p><a href="https://www.ekiipago.com/documentacion-api/">Documentación API</a></p>
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

export default BotonDePago;

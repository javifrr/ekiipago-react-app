import React from 'react';
import { Link } from 'react-router-dom';
import './LinkDePagoMovil.css';
import { Helmet } from 'react-helmet-async';

const LinkDePagoMovil: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Link de Pago Móvil para Redes Sociales y Whatsapp - EKIIPAGO</title>
        <meta name="description" content="Cobra tus productos y servicios fácilmente con el Link de Pago Móvil de EKIIPAGO. Genera y comparte links por Whatsapp, email o redes sociales en Venezuela." />
        <meta name="keywords" content="link de pago, pago móvil, venezuela, whatsapp, redes sociales, cobrar online" />
        <link rel="canonical" href="https://www.ekiipago.com/link-de-pago-movil/" />
        <meta property="og:title" content="Link de Pago Móvil para Redes Sociales y Whatsapp - EKIIPAGO" />
        <meta property="og:description" content="Cobra tus productos y servicios fácilmente con el Link de Pago Móvil de EKIIPAGO. Genera y comparte links por Whatsapp, email o redes sociales en Venezuela." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ekiipago.com/link-de-pago-movil/" />
        <meta property="og:image" content="https://www.ekiipago.com/wp-content/uploads/2023/05/link-de-pago-ekiipago.webp" />
      </Helmet>
      <div className="page-container">
        <Header />
        <main id="main-content">
          <HeroSection />
          <QueEsSection />
          <ComoCrearSection />
          <PagarConLinkSection />
          <BeneficiosSection />
          <RequisitosSection />
          <BancosAliadosSection />
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
            <h1>Link de pago</h1>
            <p>Impulsa tus ventas recibiendo tus pagos online de una manera rápida, fácil y segura con nuestro link de pago.</p>
          </div>
        </div>
      </div>
      <div className="et_pb_column et_pb_column_1_2 et_pb_column_1">
        <div className="et_pb_image et_pb_image_0">
          <span className="et_pb_image_wrap">
            <img src="https://www.ekiipago.com/wp-content/uploads/2023/05/link-de-pago-ekiipago.webp" alt="Hombre sujetando un móvil con su mano" />
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
            <h2>¿Qué es un link de pago?</h2>
            <p>Un link de pago o link de pago móvil, es un botón de pago que te facilitará la cobranza de tus productos y servicios a través de un link que podrás generar y enviar a tus clientes por Whatsapp, email o redes sociales, facilitando a ellos el pago y a tu negocio la cobranza de tus facturas.</p>
            <p>¡Tus pagos a un click!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ComoCrearSection: React.FC = () => (
    <div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
        <div className="et_pb_row et_pb_row_2">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_3">
                <div className="et_pb_text et_pb_text_2">
                    <div className="et_pb_text_inner">
                        <h2>¿Cómo crear un link de pago?</h2>
                        <ul>
                            <li>Usa o abre una cuenta de tu comercio en nuestros <a href="#aliados">Bancos Aliados</a></li>
                            <li>Como comercio o negocio contáctanos y contrata el servicio de link de pago con ekiipago</li>
                            <li>Entra en la aplicación de ekiipago con tu usuario y clave y genera el link de pago con un simple clic</li>
                            <li>Comparte el link de pago o link de cobro a tu cliente por Correo, Whatsapp o Redes Sociales</li>
                            <li>Tu cliente realiza el pago móvil por el monto indicado y registra el pago en las pantallas que muestra el link que has enviado</li>
                            <li>Listo, válida y concilia sin problemas</li>
                        </ul>
                        <div className="et_pb_button_module_wrapper">
                            <a className="et_pb_button" href="/contacto">Quiero más información </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const PagarConLinkSection: React.FC = () => (
    <div className="et_pb_section et_pb_section_3 et_section_regular">
        <div className="et_pb_row et_pb_row_3">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_4">
                <div className="et_pb_text et_pb_text_3">
                    <div className="et_pb_text_inner">
                        <h2>Pagar con un link de pago</h2>
                        <p>El 27% de los compradores en línea han abandonado una compra por un proceso de pago demasiado largo o complicado.</p>
                        <p>Con el link de pago de ekiipago, tu cliente recibirá en su correo, whatsapp o red social de su preferencia un link debidamente identificado con el nombre de tu negocio y monto a pagar, sólo debe dar clic y seguir 2 sencillos pasos:</p>
                        <p><strong>Paso 1:</strong> realizar el pago móvil por el monto exacto indicado.</p>
                        <p><strong>Paso 2:</strong> registrar el pago realizado con su número de referencia y número de teléfono.</p>
                        <p>Listo. Tu cliente cuenta con tu producto y tú con su pago de manera rápida y segura.</p>
                        <p><strong>¡No más ventas perdidas!</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const BeneficiosSection: React.FC = () => (
    <div className="et_pb_section et_pb_section_4 et_pb_with_background et_section_regular">
        <div className="et_pb_row et_pb_row_4">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_5">
                <div className="et_pb_text et_pb_text_4">
                    <div className="et_pb_text_inner">
                        <h2>Beneficios del link de pago</h2>
                        <p>Con un link de pago puedes cobrar las facturas de productos y servicios desde las RRSS, correo o Whatsapp, facilitando a tu cliente la manera de pagar tus productos y servicios.</p>
                        <p>Al realizar cobros a través de un link de pago, podrás ver todas las transacciones realizadas. Esto te ayudará a conciliar y facilitar tus trámites administrativos de tu negocio, además de generar una base de datos de clientes.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="et_pb_row et_pb_row_5">
            <div className="et_pb_column et_pb_column_1_4">
                <img src="https://www.ekiipago.com/wp-content/uploads/2023/05/mesage.webp" alt="icono de mensaje" />
                <p>Cobra tus productos y servicios con un mensaje</p>
            </div>
            <div className="et_pb_column et_pb_column_1_4">
                <img src="https://www.ekiipago.com/wp-content/uploads/2023/05/online-payment.webp" alt="icono de pago" />
                <p>Facilita el proceso de pago para tus clientes</p>
            </div>
            <div className="et_pb_column et_pb_column_1_4">
                <img src="https://www.ekiipago.com/wp-content/uploads/2023/05/folder.webp" alt="icono tramites administrativos" />
                <p>Optimiza tus trámites administrativos</p>
            </div>
            <div className="et_pb_column et_pb_column_1_4">
                <img src="https://www.ekiipago.com/wp-content/uploads/2023/05/users.webp" alt="icono base de datos" />
                <p>Genera una base de datos de clientes</p>
            </div>
        </div>
    </div>
);

const RequisitosSection: React.FC = () => (
    <div className="et_pb_section et_pb_section_5 et_section_regular">
        <div className="et_pb_row et_pb_row_6">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_6">
                <div className="et_pb_text et_pb_text_5">
                    <div className="et_pb_text_inner">
                        <h3>Requisitos del link de pago</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="et_pb_row et_pb_row_7">
            <div className="et_pb_column et_pb_column_1_3">
                <img src="https://www.ekiipago.com/wp-content/uploads/2023/04/stamp-1.webp" alt="RIF" />
                <p>RIF jurídico y documentación de la empresa</p>
            </div>
            <div className="et_pb_column et_pb_column_1_3">
                <img src="https://ekiipago.com/wp-content/uploads/2023/04/bank-1.png" alt="Banco" />
                <p>Cuenta bancaria en nuestros Bancos Aliados</p>
            </div>
            <div className="et_pb_column et_pb_column_1_3">
                <img src="https://www.ekiipago.com/wp-content/uploads/2023/04/social-media.webp" alt="Promocion" />
                <p>Promocionar tu nuevo servicio de pago digital</p>
            </div>
        </div>
        <div className="et_pb_row et_pb_row_8">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_7">
                <p>Transacciones seguras con comisiones razonables para tu negocio.</p>
                <div className="et_pb_button_module_wrapper">
                    <a className="et_pb_button" href="/contacto">Quiero más información </a>
                </div>
            </div>
        </div>
    </div>
);

const BancosAliadosSection: React.FC = () => {
    const bancos = [
        "https://www.ekiipago.com/wp-content/uploads/2023/03/banco-plaza.webp",
        "https://www.ekiipago.com/wp-content/uploads/2023/04/logo-bancaribe.webp",
        "https://www.ekiipago.com/wp-content/uploads/2023/03/bancrecer.webp",
        "https://www.ekiipago.com/wp-content/uploads/2023/03/avtivo-banco-universal.webp"
    ];

    return (
        <div id="aliados" className="et_pb_section et_pb_section_6 et_section_regular">
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

export default LinkDePagoMovil;

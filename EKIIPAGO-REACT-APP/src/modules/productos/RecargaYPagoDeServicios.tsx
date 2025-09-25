import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './RecargaYPagoDeServicios.css';

const RecargaYPagoDeServicios: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Recarga y Pago de Servicios en Venezuela - EKIIPAGO</title>
        <meta name="description" content="Ofrece recargas de saldo y pago de servicios (Movistar, Digitel, Inter) en tu plataforma. Genera ingresos adicionales con las soluciones de EKIIPAGO en Venezuela." />
        <meta name="keywords" content="recarga de saldo, pago de servicios, venezuela, movistar, digitel, inter, plataforma de pago" />
        <link rel="canonical" href="https://www.ekiipago.com/recarga-y-pago-de-servicios/" />
        <meta property="og:title" content="Recarga y Pago de Servicios en Venezuela - EKIIPAGO" />
        <meta property="og:description" content="Ofrece recargas de saldo y pago de servicios en tu plataforma y genera ingresos adicionales con las soluciones de EKIIPAGO en Venezuela." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ekiipago.com/recarga-y-pago-de-servicios/" />
        <meta property="og:image" content="https://ekiipago.com/wp-content/uploads/2023/04/medium-shot-smiley-woman-holding.webp" />
      </Helmet>
      <div className="page-container">
        <Header />
        <main id="main-content">
          <HeroSection />
          <RecargaSaldoSection />
          <PagoServiciosSection />
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
                  <Link to="/recarga-y-pago-de-servicios">Recarga y pago de servicios</Link>
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
            <h1>Conector de servicio</h1>
            <p>Con nuestra solución puedes ofrecerle a tus clientes la opción de recargar el saldo de su línea telefónica o pagar sus servicios desde tu plataforma bancaria o portal de pago.</p>
            <p>Además de prestar este servicio a los clientes que visiten tu página web o app móvil, tu generarás ingresos adicionales, ya que por cada pago de servicio o recarga de saldo que realicen tus clientes, obtendrás una comisión de esos pagos.</p>
            <p>¿Qué esperas para generar ingresos adicionales ofreciéndole a tus clientes la opción de recargar saldo o pagar sus servicios desde tu página web, app móvil y software administrativos o canales digitales?</p>
          </div>
        </div>
      </div>
      <div className="et_pb_column et_pb_column_1_2 et_pb_column_1">
        <div className="et_pb_image et_pb_image_0">
          <span className="et_pb_image_wrap">
            <img src="https://ekiipago.com/wp-content/uploads/2023/04/medium-shot-smiley-woman-holding.webp" alt="Mujer sonriente viendo su móvil" />
          </span>
        </div>
      </div>
    </div>
  </div>
);

const RecargaSaldoSection: React.FC = () => (
  <div className="et_pb_section et_pb_section_1 et_section_regular">
    <div className="et_pb_row et_pb_row_1">
      <div className="et_pb_column et_pb_column_4_4 et_pb_column_2">
        <div className="et_pb_text et_pb_text_1">
          <div className="et_pb_text_inner">
            <h2>Recarga de saldo ekiipago</h2>
            <p>Las líneas prepago suponen más del 50% de las líneas activas en el país. Por lo que ofrecer la opción a tus clientes para recargar el saldo desde tu plataforma bancaria o portal de pago puede significar un aumento de tus visitas y una manera de generar ingresos adicionales en tu plataforma con esta solución de pago digitales.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PagoServiciosSection: React.FC = () => (
    <div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
        <div className="et_pb_row et_pb_row_2">
            <div className="et_pb_column et_pb_column_1_2 et_pb_column_3">
                <div className="et_pb_text et_pb_text_2">
                    <div className="et_pb_text_inner">
                        <h2>Pago de servicios ekiipago</h2>
                        <p>Cada vez son más los servicios que se pagan de manera digital. Y hoy en día está comprobado que las personas prefieren realizar el pago de sus servicios evitando el desplazarse hasta una taquilla de pago.</p>
                        <p>Esto puede significar otra opción de ingresos adicionales para ti y tu plataforma bancaria o portal de pago. Ya que por cada pago de servicios que realicen a través de tu plataforma, recibirás un porcentaje.</p>
                    </div>
                </div>
            </div>
            <div className="et_pb_column et_pb_column_1_2 et_pb_column_4">
                <div className="et_pb_image et_pb_image_1">
                    <img src="https://ekiipago.com/wp-content/uploads/2023/03/pexels-mikael-blomkvist-6476590-980x1468.webp" alt="Dos manos sosteniendo tarjeta de crédito y teléfono móvil" />
                </div>
            </div>
        </div>
    </div>
);

const BeneficiosSection: React.FC = () => (
    <div className="et_pb_section et_pb_section_3 et_section_regular">
        <div className="et_pb_row et_pb_row_3">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_5">
                <div className="et_pb_text et_pb_text_3">
                    <div className="et_pb_text_inner">
                        <h3>¿Quién puede solicitar el servicio de Recarga de Saldo y Pago de Servicios de ekiipago?</h3>
                        <p>Cualquier empresa que preste servicios B2B que tenga una plataforma bancaria o portal de pago, puede solicitarlo y ofrecerle este servicio a sus clientes.</p>
                        <p>Y si tienes una página web o app móvil, siempre que seas una persona jurídica, podrás solicitar integrar en tu plataforma la opción de recarga de saldo y pago de servicios de ekiipago.</p>
                        <h3>¿Qué obtengo agregando la opción de recarga de saldo y pagos de servicios?</h3>
                        <p>Son muchos los beneficios que puedes obtener integrando en tu página web o app móvil las soluciones de pagos digitales para recargar saldo o pagar servicios en línea. Entre ellas podemos destacar:</p>
                        <ul>
                            <li>Ofrecer servicios adicionales a tus clientes</li>
                            <li>Obtener más visitas en tu plataforma</li>
                            <li>Generar ingresos con tu APP o Portal Web</li>
                        </ul>
                    </div>
                </div>
                <div className="et_pb_image et_pb_image_2">
                    <img src="https://ekiipago.com/wp-content/uploads/2024/03/logos-movistar-inter-digitel-01-980x201.png" alt="Logos de Movistar, Inter, Digitel" />
                </div>
            </div>
        </div>
    </div>
);

const RequisitosSection: React.FC = () => (
    <div className="et_pb_section et_pb_section_4 et_pb_with_background et_section_regular">
        <div className="et_pb_row et_pb_row_4">
            <div className="et_pb_column et_pb_column_4_4 et_pb_column_6">
                <div className="et_pb_text et_pb_text_4">
                    <div className="et_pb_text_inner">
                        <h3>¿Qué necesitas para integrar nuestra solución?</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="et_pb_row et_pb_row_5">
            <div className="et_pb_column et_pb_column_1_3">
                <img src="https://www.ekiipago.com/wp-content/uploads/2023/04/stamp-1.webp" alt="RIF" />
                <p>RIF jurídico y documentación de la empresa</p>
            </div>
            <div className="et_pb_column et_pb_column_1_3">
                <img src="https://www.ekiipago.com/wp-content/uploads/2023/04/data-processing.webp" alt="Integración" />
                <p>Integrarse con nuestra plataforma de ekiipago</p>
            </div>
            <div className="et_pb_column et_pb_column_1_3">
                <img src="https://www.ekiipago.com/wp-content/uploads/2023/04/social-media.webp" alt="Promoción" />
                <p>Promocionar tu nuevo servicio de pago digital</p>
            </div>
        </div>
    </div>
);

const BancosAliadosSection: React.FC = () => {
    const bancos = [
        "https://www.ekiipago.com/wp-content/uploads/2023/03/avtivo-banco-universal.webp",
        "https://www.ekiipago.com/wp-content/uploads/2023/04/logo-banplus.webp",
        "https://www.ekiipago.com/wp-content/uploads/2023/03/fonfo-comun.webp",
        "https://www.ekiipago.com/wp-content/uploads/2023/03/banco-caroni.webp",
        "https://www.ekiipago.com/wp-content/uploads/2023/03/bancrecer.webp"
    ];

    return (
        <div id="aliados" className="et_pb_section et_pb_section_5 et_section_regular">
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
                <p><Link to="/recarga-y-pago-de-servicios">Recargas y pagos de servicios</Link></p>
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

export default RecargaYPagoDeServicios;

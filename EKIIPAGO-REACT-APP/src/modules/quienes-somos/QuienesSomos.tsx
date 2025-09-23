import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const QuienesSomos: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    // Manejar el scroll para el header fijo
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Inicializar scripts después de que el componente se monte
    if (typeof window !== 'undefined') {
      // Aquí iría la inicialización de scripts externos si fuera necesario
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="wp-singular page-template-default page page-id-297 wp-theme-Divi et-tb-has-template et_pb_button_helper_class et_transparent_nav et_fullwidth_nav et_fixed_nav et_show_nav et_header_style_left et_pb_svg_logo et_cover_background et_pb_gutter windows et_pb_gutters3 et_pb_pagebuilder_layout et_no_sidebar et_divi_theme et-db">
      <Helmet>
        <title>Conócenos más a fondo - ekiipago</title>
        <meta name="description" content="Trabajamos con un equipo de expertos en el área tecnológica y aliados innovadores para ofrecerte lo mejor del mercado para tu negocio." />
        <meta property="og:title" content="Conócenos más a fondo - ekiipago" />
        <meta property="og:description" content="Trabajamos con un equipo de expertos en el área tecnológica y aliados innovadores para ofrecerte lo mejor del mercado para tu negocio." />
        <meta property="og:image" content="https://ekiipago.com/wp-content/uploads/2023/05/logo-ekiipago-1200x675-1.jpg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        
        {/* Facebook Pixel */}
        <script dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '621830236250150'); 
            fbq('track', 'PageView');
          `
        }} />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MWQN2SLW9F"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MWQN2SLW9F');
          `
        }} />
      </Helmet>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-KR6ZRQQ7" 
          height="0" 
          width="0" 
          style={{display: 'none', visibility: 'hidden'}}
        ></iframe>
      </noscript>

      <div id="page-container">
        {/* Header */}
        <header id="main-header" data-height-onload="40" className={isScrolled ? 'et-fixed-header' : ''}>
          <div className="container clearfix et_menu_container">
            <div className="logo_container">
              <span className="logo_helper"></span>
              <a href="https://ekiipago.com/">
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
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-319">
                    <a href="https://ekiipago.com/">Inicio</a>
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
                  <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-297 current_page_item menu-item-316">
                    <a href="https://ekiipago.com/quienes-somos/" aria-current="page">Quiénes somos</a>
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
                <div className={`mobile_nav ${mobileMenuOpen ? 'opened' : 'closed'}`}>
                  <span className="select_page">Seleccionar página</span>
                  <span 
                    className="mobile_menu_bar mobile_menu_bar_toggle"
                    onClick={toggleMobileMenu}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div id="et-main-area">
          <div id="main-content">
            <article id="post-297" className="post-297 page type-page status-publish hentry">
              <div className="entry-content">
                <div className="et-l et-l--post">
                  <div className="et_builder_inner_content et_pb_gutters3">
                    
                    {/* Sección 1: ¿Quiénes somos? */}
                    <section className="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular">
                      <div className="et_pb_row et_pb_row_0">
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_0 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h1 id="QuienesSomos">¿Quiénes somos?</h1>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_1 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p><strong>Somos un abanico de soluciones de pagos digitales pensadas para comercios e instituciones financieras.</strong></p>
                              <p><span>Trabajamos con un equipo de </span><span>expertos en el área tecnológica, contamos con aliados innovadores con </span><span>visión de futuro para ofrecerte lo mejor del mercado para tu negocio.</span></p>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_divider_0 et_pb_space et_pb_divider_hidden">
                            <div className="et_pb_divider_internal"></div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_1 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_image et_pb_image_0 et_pb_image_sticky">
                            <span className="et_pb_image_wrap has-box-shadow-overlay">
                              <div className="box-shadow-overlay"></div>
                              <img 
                                fetchPriority="high" 
                                decoding="async" 
                                width="1920" 
                                height="1280" 
                                src="https://www.ekiipago.com/wp-content/uploads/2023/03/pexels-andrea-piacquadio-859265.webp" 
                                alt="dos manos sosteniendo tarjeta de crédito y telefono movil" 
                                title="pexels-andrea-piacquadio-859265" 
                                srcSet="https://ekiipago.com/wp-content/uploads/2023/03/pexels-andrea-piacquadio-859265.webp 1920w, https://ekiipago.com/wp-content/uploads/2023/03/pexels-andrea-piacquadio-859265-1280x853.webp 1280w, https://ekiipago.com/wp-content/uploads/2023/03/pexels-andrea-piacquadio-859265-980x653.webp 980w, https://ekiipago.com/wp-content/uploads/2023/03/pexels-andrea-piacquadio-859265-480x320.webp 480w" 
                                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) and (max-width: 1280px) 1280px, (min-width: 1281px) 1920px, 100vw" 
                                className="wp-image-275" 
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Sección 2: Si estás buscando */}
                    <section className="et_pb_section et_pb_section_1 et_pb_section_parallax et_pb_with_background et_section_regular">
                      <div className="et_parallax_bg_wrap">
                        <span
                          className="et_parallax_bg"
                          style={{backgroundImage: "url(https://www.ekiipago.com/wp-content/uploads/2023/04/indoor-shot-happy-fashionable-fe.webp)"}}
                        ></span>
                        <span
                          className="et_parallax_gradient"
                          style={{backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(196,196,196,0) 0%, rgba(114,52,233,0.88) 0%)"}}
                        ></span>
                      </div>
                      <div className="et_pb_row et_pb_row_1">
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_2 et_pb_css_mix_blend_mode_passthrough et_pb_column_empty"></div>
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_3 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_2 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p>Si estás buscando:</p>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_3 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h3 id="GeneraringresoscontuAPPoPortalWeb">Generar ingresos con tu APP o Portal Web</h3>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_divider et_pb_divider_1 et_pb_divider_position_ et_pb_space">
                            <div className="et_pb_divider_internal"></div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_4 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h3 id="Experienciasdepagoamigables">Experiencias de pago amigables</h3>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_divider et_pb_divider_2 et_pb_divider_position_ et_pb_space">
                            <div className="et_pb_divider_internal"></div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_5 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h3 id="Facilidaddeintegración">Facilidad de integración</h3>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_divider et_pb_divider_3 et_pb_divider_position_ et_pb_space">
                            <div className="et_pb_divider_internal"></div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_6 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h3 id="Seguridadyrapidezenlosprocesos">Seguridad y rapidez en los procesos</h3>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_divider et_pb_divider_4 et_pb_divider_position_ et_pb_space">
                            <div className="et_pb_divider_internal"></div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_7 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p><span>¡Te ofrecemos la mejor experiencia de</span><br /><span>pago para ti y tu cliente!</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Sección 3: Visión y Misión */}
                    <section className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
                      <div className="et_pb_row et_pb_row_2 et_pb_equal_columns">
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_4 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_text et_pb_text_8 et_pb_text_align_center et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h5 id="Vision"><strong>Visión</strong></h5>
                              <p><span>Ser la marca de soluciones de medios de pagos digitales para Venezuela y la región, que permita al sector bancario y no bancario potenciar sus modelos de negocio.</span></p>
                            </div>
                          </div>
                        </div>
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_5 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_9 et_pb_text_align_center et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h5 id="Mision"><span>Misión</span></h5>
                              <p><span>Queremos ser los aliados de comercios, instituciones y entes bancarios en Venezuela y la Región que agilicen los pagos digitales, gracias a nuestras soluciones y excelente servicio de asesoría.</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Sección 4: Nuestro equipo */}
                    <section className="et_pb_section et_pb_section_3 et_pb_with_background et_pb_section_parallax et_section_regular">
                      <div className="et_pb_row et_pb_row_3">
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_6 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_text et_pb_text_10 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h2 id="Nuestroequipo">Nuestro equipo</h2>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_11 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p><span>Conformado por líderes profesionales innovadores, que creen </span><span>en la tecnología y en un futuro exitoso para todos.</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="et_pb_row et_pb_row_4">
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_7 et_pb_css_mix_blend_mode_passthrough">
                          <div className="et_pb_module et_pb_image et_pb_image_1">
                            <span className="et_pb_image_wrap">
                              <img 
                                decoding="async" 
                                width="596" 
                                height="596" 
                                src="https://www.ekiipago.com/wp-content/uploads/2023/03/lla-2023-03-27-a-la-s-12-35-38-p-m.webp" 
                                alt="Alfonso Riveroll" 
                                title="Alfonso Riveroll" 
                                srcSet="https://ekiipago.com/wp-content/uploads/2023/03/lla-2023-03-27-a-la-s-12-35-38-p-m.webp 596w, https://ekiipago.com/wp-content/uploads/2023/03/lla-2023-03-27-a-la-s-12-35-38-p-m-480x480.webp 480w" 
                                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 596px, 100vw" 
                                className="wp-image-519" 
                              />
                            </span>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_12 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h3 id="AlfonsoRiveroll"><strong>Alfonso Riveroll</strong></h3>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_13 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h3 id="CEO"><strong> CEO</strong></h3>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_14 et_pb_text_align_center et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p className="p2"><span>Soy un empresario venezolano, fundador de un conglomerado de empresas comprometidas con el desarrollo de soluciones tecnológicas a escala internacional entre las que se encuentra </span><b>ekiipago</b><span>.<br /></span><span>Me eduqué en importantes casas de estudio nacionales e internacionales donde me licencié en finanzas y negocios Internacionales con MBA en finanzas.</span></p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="et_pb_column et_pb_column_1_2 et_pb_column_8 et_pb_css_mix_blend_mode_passthrough et-last-child">
                          <div className="et_pb_module et_pb_image et_pb_image_2">
                            <span className="et_pb_image_wrap">
                              <img 
                                decoding="async" 
                                width="400" 
                                height="400" 
                                src="https://www.ekiipago.com/wp-content/uploads/2023/03/Foto-Grace-400px.webp" 
                                alt="Grace Escobar" 
                                title="Foto Grace 400px" 
                                srcSet="https://ekiipago.com/wp-content/uploads/2023/03/Foto-Grace-400px.webp 400w, https://ekiipago.com/wp-content/uploads/2023/03/Foto-Grace-400px-300x300.webp 300w, https://ekiipago.com/wp-content/uploads/2023/03/Foto-Grace-400px-150x150.webp 150w" 
                                sizes="(max-width: 400px) 100vw, 400px" 
                                className="wp-image-683" 
                              />
                            </span>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_15 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h3 id="GraceEscobar"><strong>Grace Escobar</strong></h3>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_16 et_pb_text_align_left et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <h3 id="GerenteComercial"><strong>Gerente Comercial</strong></h3>
                            </div>
                          </div>
                          <div className="et_pb_module et_pb_text et_pb_text_17 et_pb_text_align_center et_pb_bg_layout_light">
                            <div className="et_pb_text_inner">
                              <p><span>Soy apasionada de las soluciones tecnológicas que facilitan la vida de las personas. <br />Licenciada en Informática con especializaciones en proyectos , desarrollo de producto y MBA en Transformación Digital.<br />Me encuentro liderando la línea de negocio de <b>ekiipago </b>como Gerente Comercial y Operaciones.</span><span> </span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Footer */}
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
                        className="wp-image-31" 
                      />
                    </span>
                  </div>
                  <div className="et_pb_module et_pb_text et_pb_text_0_tb_footer et_pb_text_align_left et_pb_bg_layout_light">
                    <div className="et_pb_text_inner">
                      <p><span>Calle Altagracia, Edif. P&amp;G,</span><br /><span>torre Este, piso 1, Urb.</span><br /><span>Sorokaima, La Trinidad,</span><br /><span>municipio Baruta, Edo. Miranda.</span></p>
                      <p><span>+58 412-6174329</span></p>
                      <p><span>contacto@ekiipago.com</span></p>
                    </div>
                  </div>
                  <ul className="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_0_tb_footer clearfix et_pb_bg_layout_light">
                    <li className="et_pb_social_media_follow_network_0_tb_footer et_pb_social_icon et_pb_social_network_link et-social-instagram">
                      <a href="https://www.instagram.com/ekiipago/" className="icon et_pb_with_border" title="Seguir en Instagram" target="_blank" rel="noopener noreferrer">
                        <span className="et_pb_social_media_follow_network_name" aria-hidden="true">Seguir</span>
                      </a>
                    </li>
                    <li className="et_pb_social_media_follow_network_1_tb_footer et_pb_social_icon et_pb_social_network_link et-social-twitter">
                      <a href="https://twitter.com/ekiipago" className="icon et_pb_with_border" title="Seguir en X" target="_blank" rel="noopener noreferrer">
                        <span className="et_pb_social_media_follow_network_name" aria-hidden="true">Seguir</span>
                      </a>
                    </li>
                    <li className="et_pb_social_media_follow_network_2_tb_footer et_pb_social_icon et_pb_social_network_link et-social-linkedin">
                      <a href="https://www.linkedin.com/showcase/ekiipago/" className="icon et_pb_with_border" title="Seguir en LinkedIn" target="_blank" rel="noopener noreferrer">
                        <span className="et_pb_social_media_follow_network_name" aria-hidden="true">Seguir</span>
                      </a>
                    </li>
                    <li className="et_pb_social_media_follow_network_3_tb_footer et_pb_social_icon et_pb_social_network_link et-social-youtube">
                      <a href="https://www.youtube.com/@ekiipago7179" className="icon et_pb_with_border" title="Seguir en Youtube" target="_blank" rel="noopener noreferrer">
                        <span className="et_pb_social_media_follow_network_name" aria-hidden="true">Seguir</span>
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="et_pb_column et_pb_column_1_3 et_pb_column_1_tb_footer et_pb_css_mix_blend_mode_passthrough">
                  <div className="et_pb_module et_pb_text et_pb_text_1_tb_footer et_pb_text_align_left et_pb_bg_layout_light">
                    <div className="et_pb_text_inner">
                      <p>PRODUCTOS</p>
                    </div>
                  </div>
                  <div className="et_pb_module et_pb_text et_pb_text_2_tb_footer et_pb_text_align_left et_pb_bg_layout_light">
                    <div className="et_pb_text_inner">
                      <p><a href="https://www.ekiipago.com/boton-de-pago-ekiipago/">Botón de Pago</a></p>
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
                      <p><a href="https://www.ekiipago.com/quienes-somos/">Quiénes somos</a></p>
                      <p><a href="https://www.ekiipago.com/blog-ekiipago/">Blog ekiipago</a></p>
                      <p><a href="https://www.ekiipago.com/contacto/">Contacto</a></p>
                    </div>
                  </div>
                  <div className="et_pb_module et_pb_text et_pb_text_5_tb_footer et_pb_text_align_left et_pb_bg_layout_light">
                    <div className="et_pb_text_inner">
                      <p><span>Celupago,C.A J31727952-2.</span><br /><span>Todos los derechos reservados.</span></p>
                    </div>
                  </div>
                  <div className="et_pb_module et_pb_text et_pb_text_6_tb_footer et_pb_text_align_left et_pb_bg_layout_light">
                    <div className="et_pb_text_inner">
                      <p><span>Powered by:</span></p>
                    </div>
                  </div>
                  <div className="et_pb_module et_pb_image et_pb_image_1_tb_footer">
                    <a href="https://andromedaventures.net/" target="_blank" rel="noopener noreferrer">
                      <span className="et_pb_image_wrap">
                        <img 
                          decoding="async" 
                          width="352" 
                          height="95" 
                          src="https://www.ekiipago.com/wp-content/uploads/2023/03/da-logo-354x96x2x0x352x96x1599793968.webp" 
                          alt="logo de andromeda" 
                          srcSet="https://ekiipago.com/wp-content/uploads/2023/03/da-logo-354x96x2x0x352x96x1599793968.webp 352w, https://ekiipago.com/wp-content/uploads/2023/03/da-logo-354x96x2x0x352x96x1599793968-300x81.webp 300w" 
                          sizes="(max-width: 352px) 100vw, 352px" 
                          className="wp-image-329" 
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="et_pb_row et_pb_row_1_tb_footer">
                <div className="et_pb_column et_pb_column_4_4 et_pb_column_3_tb_footer et_pb_css_mix_blend_mode_passthrough et-last-child">
                  <div className="et_pb_module et_pb_text et_pb_text_8_tb_footer et_pb_text_align_center et_pb_bg_layout_light">
                    <div className="et_pb_text_inner">
                      Copyright © 2025 ekiipago
                    </div>
                  </div>
                  <div className="et_pb_module et_pb_text et_pb_text_9_tb_footer et_pb_text_align_center et_pb_bg_layout_light">
                    <div className="et_pb_text_inner">
                      <p><a href="https://www.ekiipago.com/politica-de-cookies/" target="_blank" rel="noopener noreferrer">Política de Cookies</a> – <a href="https://www.ekiipago.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Política de Privacidad</a> – <a href="https://www.ekiipago.com/aviso-legal/" target="_blank" rel="noopener noreferrer">Aviso Legal</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>

      <style>{`
        /* Estilos globales */
        body {
          font-family: 'Open Sans', Arial, sans-serif;
          font-size: 14px;
          color: #666;
          background-color: #fff;
          line-height: 1.7em;
          font-weight: 500;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          margin: 0;
          padding: 0;
        }
        
        /* Header */
        #main-header {
          background-color: rgba(114,52,233,0.59);
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 99999;
          transition: background-color 0.4s ease-in-out;
        }
        
        #main-header.et-fixed-header {
          background-color: #7234e9;
          box-shadow: 0 0 7px rgba(0,0,0,0.1);
        }
        
        .container {
          width: 80%;
          max-width: 1080px;
          margin: auto;
          position: relative;
        }
        
        .logo_container {
          position: absolute;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
        }
        
        .logo_helper {
          display: inline-block;
          height: 100%;
          vertical-align: middle;
          width: 0;
        }
        
        /* Navegación */
        #et-top-navigation {
          float: right;
        }
        
        .nav {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .nav li {
          display: inline-block;
          font-size: 14px;
          padding-right: 22px;
          position: relative;
        }
        
        .nav li:last-child {
          padding-right: 0;
        }
        
        .nav a {
          color: rgba(0,0,0,0.6);
          text-decoration: none;
          display: block;
          position: relative;
          transition: opacity 0.4s ease-in-out;
        }
        
        .nav a:hover {
          opacity: 0.7;
        }
        
        /* Menú móvil */
        #et_mobile_nav_menu {
          display: none;
          float: right;
        }
        
        .mobile_nav {
          position: relative;
          display: block;
          line-height: 0;
        }
        
        .mobile_menu_bar {
          position: relative;
          display: block;
          line-height: 0;
          cursor: pointer;
        }
        
        .mobile_menu_bar:before {
          content: "\\61";
          font-family: ETmodules;
          font-size: 32px;
          left: 0;
          position: relative;
          top: 0;
        }
        
        /* Secciones */
        .et_pb_section {
          position: relative;
          background-color: #fff;
          background-position: 50%;
          background-size: cover;
        }
        
        .et_pb_row {
          width: 80%;
          max-width: 1080px;
          margin: auto;
          position: relative;
          display: flex;
          flex-wrap: wrap;
        }
        
        .et_pb_column {
          float: left;
          background-size: cover;
          background-position: 50%;
          position: relative;
          z-index: 2;
          min-height: 1px;
        }
        
        .et_pb_column_1_2 {
          width: 47.25%;
          margin-right: 5.5%;
        }
        
        .et_pb_column_1_2.et-last-child {
          margin-right: 0;
        }
        
        .et_pb_text {
          word-wrap: break-word;
        }
        
        .et_pb_text_inner h1 {
          font-family: 'Roboto', Helvetica, Arial, Lucida, sans-serif;
          font-weight: 700;
          font-size: 58px;
          color: #1D1D1D;
          line-height: 1.1em;
        }
        
        .et_pb_text_inner h2 {
          font-family: 'Roboto', Helvetica, Arial, Lucida, sans-serif;
          font-weight: 700;
        }
        
        .et_pb_text_inner h3 {
          font-family: 'Roboto', Helvetica, Arial, Lucida, sans-serif;
          font-weight: 700;
          font-size: 18px;
          color: #FFFFFF;
        }
        
        .et_pb_text_inner p {
          font-family: 'Chivo', Helvetica, Arial, Lucida, sans-serif;
          font-weight: 300;
          font-size: 15px;
          line-height: 1.6em;
          color: #1D1D1D;
        }
        
        /* Imágenes */
        .et_pb_image_wrap {
          display: inline-block;
          position: relative;
          max-width: 100%;
        }
        
        .et_pb_image_wrap img {
          position: relative;
          max-width: 100%;
          height: auto;
        }
        
        .has-box-shadow-overlay {
          border-radius: 124px 124px 0 0;
          overflow: hidden;
          box-shadow: 6px 6px 18px 0px rgba(0,0,0,0.3);
        }
        
        /* Efectos parallax */
        .et_parallax_bg_wrap {
          overflow: hidden;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
        
        .et_parallax_bg {
          background-repeat: no-repeat;
          background-position: top;
          background-size: cover;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: block;
        }
        
        .et_parallax_gradient {
          bottom: 0;
          display: block;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
        }
        
        /* Footer */
        .et-l--footer {
          background-color: #f5f5f5;
          padding: 40px 0;
        }
        
        .et_pb_social_media_follow {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 20px 0 0 0;
        }
        
        .et_pb_social_media_follow li {
          margin-right: 10px;
        }
        
        .et_pb_social_media_follow a {
          display: inline-block;
          font-size: 24px;
          position: relative;
          text-align: center;
          transition: color 300ms ease;
          color: #666;
          text-decoration: none;
        }
        
        .et_pb_social_media_follow a:hover {
          opacity: 0.7;
        }
        
        /* Responsive */
        @media (max-width: 980px) {
          .container {
            width: 90%;
          }
          
          #et-top-navigation {
            float: none;
          }
          
          #top-menu {
            display: none;
          }
          
          #et_mobile_nav_menu {
            display: block;
          }
          
          .et_pb_column {
            width: 100%;
            margin-bottom: 30px;
            margin-right: 0;
          }
          
          .et_pb_column_1_2 {
            width: 100%;
            margin-right: 0;
          }
        }
        
        @media (max-width: 767px) {
          .et_pb_text_inner h1 {
            font-size: 38px;
          }
          
          .et_pb_text_inner h2 {
            font-size: 28px;
          }
          
          .et_pb_text_inner h3 {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default QuienesSomos;
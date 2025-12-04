import React, { useEffect } from 'react';
import '../styles/Intro.css'; // Asegúrate de que el archivo CSS esté en la carpeta 'styles'

const Intro = () => {
  useEffect(() => {
    document.title = 'Introducción';
  }, []);

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">Diego Campos</div>
          <ul className="nav-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/Intro" className="active">Introducción</a></li>
            <li><a href="/Foda">Análisis FODA</a></li>
            <li><a href="/Smart">Metas SMART</a></li>
            <li><a href="/Estrategias">Estrategias</a></li>
            <li><a href="/Recursos">Recursos</a></li>
            <li><a href="/Conclusiones">Conclusiones</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="video-bg">
            <video autoPlay muted loop playsInline>
              <source src="videos/intro.mp4" type="video/mp4" />
              Tu navegador no soporta el video. Puedes descargarlo <a href="videos/215500_small.mp4">aquí</a>.
            </video>
          </div>
          <div className="hero-content">
            <div className="hero-overlay" aria-hidden="true"></div>

            <div className="hero-inner" role="region" aria-labelledby="hero-title">
              <div className="hero-text">
                <h1 id="hero-title" className="fade-in">Introducción</h1>
                <p className="lead slide-up">
                  En los equipos donde me gustaría trabajar, la claridad del código y la seguridad desde el diseño son prácticas cotidianas: contratos bien definidos entre módulos, entradas saneadas, manejo explícito de errores y logs que permitan entender el comportamiento del sistema sin exponer datos sensibles.
                </p>
                <p className="slide-up">
                  A corto plazo priorizo tareas de backend (endpoints con validación, manejo de excepciones, pruebas mínimas y control de acceso básico). A mediano/largo plazo quiero asumir responsabilidades en autenticación, registros de auditoría y aplicar el principio de mínimo privilegio.
                </p>
              </div>

              <aside className="hero-cards" aria-label="Resumen rápido">
                <article className="card">
                  <h3>Buenas prácticas</h3>
                  <p>Contratos claros, validación de entradas, logs útiles y manejo de errores.</p>
                </article>

                <article className="card">
                  <h3>Enfoque</h3>
                  <p>Backend sólido hoy; seguridad, auditoría y control de accesos a mediano plazo.</p>
                </article>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Diego Campos Borbón</p>
      </footer>
    </div>
  );
};

export default Intro;

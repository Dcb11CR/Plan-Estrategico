import React, { useEffect } from 'react';
import '../styles/Foda.css'; // Asegúrate de que el archivo CSS esté en la carpeta 'styles'

const Foda = () => {
  useEffect(() => {
    document.title = 'Análisis FODA';
  }, []);

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">Diego Campos</div>
          <ul className="nav-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/Intro">Introducción</a></li>
            <li><a href="/Foda" className="active">Análisis FODA</a></li>
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
              <source src="videos/foda.mp4" type="video/mp4" />
              Tu navegador no soporta el video. Puedes descargarlo <a href="videos/office-analysis.mp4">aquí</a>.
            </video>
          </div>
          <div className="hero-content" aria-labelledby="foda-title">
            <h1 id="foda-title" className="fade-in">Análisis FODA</h1>

            <div className="foda-grid" role="list">
              <article className="card strengths" role="listitem" aria-labelledby="foda-fort">
                <h2 id="foda-fort">Fortalezas</h2>
                <ul>
                  <li>Pensamiento estructurado y organización</li>
                  <li>Aprendizaje autónomo</li>
                  <li>Seguridad aplicada desde el diseño</li>
                </ul>
              </article>

              <article className="card opportunities" role="listitem" aria-labelledby="foda-opo">
                <h2 id="foda-opo">Oportunidades</h2>
                <ul>
                  <li>La demanda de perfiles junior en tecnología</li>
                  <li>Certificaciones introductorias en ciberseguridad</li>
                </ul>
              </article>

              <article className="card weaknesses" role="listitem" aria-labelledby="foda-deb">
                <h2 id="foda-deb">Debilidades</h2>
                <ul>
                  <li>Falta de experiencia formal en la industria</li>
                  <li>Inglés en nivel A2</li>
                </ul>
              </article>

              <article className="card threats" role="listitem" aria-labelledby="foda-ame">
                <h2 id="foda-ame">Amenazas</h2>
                <ul>
                  <li>Competencia con más experiencia</li>
                  <li>Cambios rápidos en la tecnología</li>
                </ul>
              </article>
            </div>

            <p className="cta">Pequeños pasos constantes llevan a grandes logros. Mantén la curiosidad y persevera.</p>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Diego Campos Borbón</p>
      </footer>
    </div>
  );
};

export default Foda;

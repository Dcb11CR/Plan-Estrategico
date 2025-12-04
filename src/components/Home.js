import React, { useEffect } from 'react';
import '../styles/Home.css'; // O puedes cambiar el nombre del archivo CSS si también lo renombraste

const Home = () => {
  useEffect(() => {
    document.title = 'Plan Estratégico Personal';
  }, []);

  return (
    <div>
 
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline>
              <source src="videos/index.mp4" type="video/mp4" />
              Tu navegador no soporta el video. Puedes descargarlo <a href="videos/215500_small.mp4">aquí</a>.
            </video>
          </div>

          <div className="hero-content">
            <h1 id="hero-title" className="fade-in">Plan Estratégico Personal 2025</h1>
            <h2 className="fade-in">Diego Campos Borbón</h2>
            <p className="slide-up">Mi visión, misión y objetivos para el crecimiento profesional y personal</p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '18px' }}>
              <a href="/Intro" className="btn">Ver mi plan</a>
            </div>

            <div className="hero-meta" aria-hidden="true">
              <span className="meta-pill">Visión: Liderar con soluciones seguras y éticas</span>
              <span className="meta-pill">Misión: Desarrollo y ciberseguridad aplicados al impacto real</span>
              <span className="meta-pill">Objetivo: Escalar impacto, automatizar procesos y mejorar competencias</span>
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

export default Home;

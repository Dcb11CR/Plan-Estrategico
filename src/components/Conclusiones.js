import React, { useEffect } from 'react';
import '../styles/Conclusiones.css'; // Asegúrate de que el archivo CSS esté en la carpeta 'styles'

const Conclusiones = () => {
  useEffect(() => {
    document.title = 'Conclusiones';
  }, []);

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">Diego Campos</div>
          <ul className="nav-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/Intro">Introducción</a></li>
            <li><a href="/Foda">Análisis FODA</a></li>
            <li><a href="/Smart">Metas SMART</a></li>
            <li><a href="/Estrategias">Estrategias</a></li>
            <li><a href="/Recursos">Recursos</a></li>
            <li><a href="/Conclusiones" className="active">Conclusiones</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="video-bg">
            <video autoPlay muted loop playsInline>
              <source src="videos/conclusion.mp4" type="video/mp4" />
              Tu navegador no soporta el video. Puedes descargarlo <a href="videos/215500_small.mp4">aquí</a>.
            </video>
          </div>

          <div className="hero-content2">
            <div className="hero-left1">
              <h1 className="fade-in">Conclusiones</h1>

              <p className="lead slide-up">
                Este plan estratégico está diseñado para orientarme hacia el logro de mis objetivos profesionales.
              </p>

              <div className="points slide-up">
                <div className="point">
                  <strong>Seguridad desde el diseño</strong>
                  <div className="meta">Aplicar validación robusta, manejo seguro de credenciales y principio de mínimo privilegio en la base de datos.</div>
                </div>

                <div className="point">
                  <strong>Código de calidad</strong>
                  <div className="meta">Escribir código legible, modular y probado; manejar errores sin exponer información sensible y mantener logs útiles.</div>
                </div>

                <div className="point">
                  <strong>Procesos y feedback</strong>
                  <div className="meta">Dividir trabajo en entregas pequeñas, cumplir tiempos y pedir retroalimentación (revisiones y lecciones aprendidas).</div>
                </div>

                <div className="point">
                  <strong>Desarrollo profesional</strong>
                  <div className="meta">Mejorar inglés a B1 (CEFR) y preparar SC-900 como respaldo de fundamentos en seguridad.</div>
                </div>
              </div>
            </div>

            {/* Sección derecha, a la par */}
            <aside className="hero-right1">
              <div className="progress-card slide-up" aria-hidden="false">
                <div className="progress-label">Inglés → Objetivo: B1</div>
                <div className="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="35">
                  <span style={{ width: '35%' }}></span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#cfe4ff', marginTop: '0.5rem' }}>Avance actual: 35%</div>
              </div>

              <div className="progress-card slide-up">
                <div className="progress-label">Preparación SC-900</div>
                <div className="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="10">
                  <span style={{ width: '10%' }}></span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#cfe4ff', marginTop: '0.5rem' }}>Plan: repasar fundamentos y realizar simulacros</div>
              </div>

              <div className="progress-card slide-up">
                <div className="progress-label">Compromisos</div>
                <ul style={{ margin: '0.4rem 0 0 1rem', color: '#dbe9ff', fontSize: '0.95rem' }}>
                  <li>Cumplir tiempos y dividir entregas</li>
                  <li>Pedir feedback frecuente</li>
                  <li>Demostrar calidad desde el primer día</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Diego Campos Borbón</p>
      </footer>
    </div>
  );
};

export default Conclusiones;

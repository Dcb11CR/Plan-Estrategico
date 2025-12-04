import React, { useEffect } from 'react';
import '../styles/Recursos.css'; // Asegúrate de que el archivo CSS esté en la carpeta 'styles'

const Recursos = () => {
  useEffect(() => {
    document.title = 'Recursos';
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
            <li><a href="/Recursos" className="active">Recursos</a></li>
            <li><a href="/Conclusiones">Conclusiones</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="video-bg">
            <video autoPlay muted loop playsInline>
              <source src="videos/recursos.mp4" type="video/mp4" />
              Tu navegador no soporta el video. Puedes descargarlo <a href="videos/215500_small.mp4">aquí</a>.
            </video>
          </div>

            <div className="hero-card fade-in" role="region" aria-labelledby="recursos-title">
              <div>
                <div className="title-row">
                  <h1 id="recursos-title">Recursos para mi Desarrollo</h1>
                </div>
                <p className="lead slide-up">
                  A continuación se presentan los recursos más importantes que utilizaré para alcanzar mis metas y seguir mi desarrollo profesional.
                </p>
                <br/>
                <ul className="resources slide-up" aria-label="Lista de recursos">
                  <li>
                    <div className="icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#cfe6ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20v-8"></path>
                        <path d="M18 20V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12"></path>
                      </svg>
                    </div>
                    <div>
                      <h3>Formación técnica</h3>
                      <p>Cursos intro/intermedios de secure coding, unit testing, gestión de errores, modelado de datos y fundamentos de seguridad en la nube.</p>
                    </div>
                  </li>

                  <li>
                    <div className="icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#cfe6ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3>Mentoría y comunidad</h3>
                      <p>Revisión mensual de código; práctica de entrevistas técnicas; participación en foros y meetups para feedback accionable.</p>
                    </div>
                  </li>

                  <li>
                    <div className="icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#cfe6ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="14" rx="2"></rect>
                        <path d="M8 20v-2"></path>
                      </svg>
                    </div>
                    <div>
                      <h3>Herramientas</h3>
                      <p>IDEs (VS/VS Code/NetBeans), Git/GitHub, entorno SQL de práctica, laboratorios en Linux y plantillas de checklists y README estandarizado.</p>
                    </div>
                  </li>

                  <li>
                    <div className="icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#cfe6ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 7h18"></path>
                        <path d="M6 11h12"></path>
                        <path d="M9 15h6"></path>
                      </svg>
                    </div>
                    <div>
                      <h3>Organización y seguimiento</h3>
                      <p>Calendario con bloques semanales; Kanban (Meta → Tareas → Estado → Evidencia); registro de KPIs (aplicaciones, entrevistas, tests, cobertura, inglés).</p>
                    </div>
                  </li>
                </ul>
              </div>

              <aside className="aside slide-up" aria-hidden="false">
                <p className="aside-note">
                  Consejo rápido: establece bloques semanales pequeños y medibles. Prioriza prácticas con revisión de código real para acelerar el aprendizaje.
                </p>

                <div className="progress-wrap" aria-hidden="false">
                  <div className="progress-label">Progreso del plan (mes actual)</div>
                  <div className="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="45" title="45%">
                    <span style={{ width: '45%' }}></span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#bfe0ff', marginTop: '0.35rem' }}>
                    Objetivos completados: 3 / 7
                  </div>
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

export default Recursos;

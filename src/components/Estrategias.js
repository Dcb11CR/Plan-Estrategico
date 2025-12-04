import React, { useEffect } from 'react';
import '../styles/Estrategias.css'; // Asegúrate de que el archivo CSS esté en la carpeta 'styles'

const Estrategias = () => {
  useEffect(() => {
    document.title = 'Estrategias';
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
            <li><a href="/Estrategias" className="active">Estrategias</a></li>
            <li><a href="/Recursos">Recursos</a></li>
            <li><a href="/Conclusiones">Conclusiones</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero new-hero" aria-labelledby="estrategias-title">
          <div className="video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline poster="videos/estrategia-poster.jpg">
              <source src="videos/estrategia.mp4" type="video/mp4" />
              {/* Fallback: imagen estática y enlace al vídeo */}
              <img className="fallback" src="videos/estrategia-poster.jpg" alt="Fondo: personas trabajando en proyectos" />
            </video>
          </div>

          <div className="hero-content fade-up">
            <div className="hero-headline">
              <h1 id="estrategias-title">Estrategias</h1>
              <span className="hero-intro" style={{ marginLeft: 'left', fontWeight: 600, color: '#cfe7ff' }}>
                Plan práctico: acciones mensuales y evidencia medible.
              </span>
            </div>

            <p className="hero-intro2" aria-label="Introducción breve">
              He diseñado este plan operacional para convertir mis objetivos en acciones concretas y medibles: priorizaré mensualmente 15–20 empresas objetivo y adaptaré CV y cartas; dedicaré 2 horas diarias a práctica de desarrollo y simulacros técnicos regulares; mantendré un backlog quincenal para endpoints, validación, pruebas y manejo seguro de errores; aplicaré principios "secure by design" y documentaré evidencia en commits y en el README. Cada línea de trabajo tendrá criterios de éxito y registros replicables para evaluar mi progreso y mejorar iterativamente.
            </p>

            <div className="strategies-grid" role="list">
              <article className="strategy-card" role="listitem">
                <div className="card-head">
                  <div className="num-badge">1</div>
                  <div className="card-title">Empleabilidad y búsqueda dirigida</div>
                </div>
                <div className="card-body">
                  La priorización de vacantes la haré mensualmente con un listado de 15–20 empresas objetivo y sus stacks. Cada aplicación irá con CV y carta ajustados a palabras clave (validación de entradas, manejo de errores, mínimo privilegio, pruebas unitarias). Realizaré simulacros quincenales (técnicos y STAR) y registraré mejoras. Tras cada entrevista, documentaré preguntas frecuentes y respuestas modelo para iterar.
                </div>
              </article>

              <article className="strategy-card" role="listitem">
                <div className="card-head">
                  <div className="num-badge">2</div>
                  <div className="card-title">Desarrollo de software</div>
                </div>
                <div className="card-body">
                  Organizaré un backlog quincenal para cada proyecto: endpoints; validación; manejo de excepciones; pruebas; documentación. Seguiré una guía de legibilidad (nombres expresivos, estructura modular, comentarios mínimos y claros) y mantendré ≥10 tests en la API. En base de datos, implementaré roles/permisos bajo mínimo privilegio, con evidencia replicable en el README. El manejo de errores evitará filtrar detalles sensibles y los logs incluirán solo lo necesario para diagnosticar.
                </div>
              </article>

              <article className="strategy-card" role="listitem">
                <div className="card-head">
                  <div className="num-badge">3</div>
                  <div className="card-title">Ciberseguridad aplicada</div>
                </div>
                <div className="card-body">
                  Aplicaré una checklist secure by design por entrega: credenciales fuera del repo; inputs saneados; mínimo privilegio; tratamiento seguro de errores; trazabilidad sin exponer secretos. Pediré una revisión cruzada (alguien intentando “romper” la app) y publicaré un caso de estudio con decisiones y su justificación.
                </div>
              </article>

              <article className="strategy-card" role="listitem">
                <div className="card-head">
                  <div className="num-badge">4</div>
                  <div className="card-title">Formación y certificación</div>
                </div>
                <div className="card-body">
                  Mantendré una rutina de inglés 40 min/día y completaré 2 cursos (código seguro y testing) con commits que muestren lo aplicado. Para SC-900, haré un mapa de contenidos por dominio, glosario propio y 2 simulacros ≥70% antes de agendar el examen.
                </div>
              </article>
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

export default Estrategias;

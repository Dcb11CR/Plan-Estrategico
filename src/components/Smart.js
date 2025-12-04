import React, { useEffect } from 'react';
import '../styles/Smart.css'; // Asegúrate de que el archivo CSS esté en la carpeta 'styles'

const Smart = () => {
  useEffect(() => {
    document.title = 'Metas SMART';
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
            <li><a href="/Smart" className="active">Metas SMART</a></li>
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
              <source src="videos/smart.mp4" type="video/mp4" />
              Tu navegador no soporta el video. Puedes descargarlo <a href="videos/1110176_Oriental_Plan_1920x1080.mov">aquí</a>.
            </video>
          </div>

          <div className="hero-overlay">
            <div className="hero-inner" aria-labelledby="smart-title">
              <header className="hero-header">
                <h1 id="smart-title" className="hero-title">Metas SMART</h1>
                <p className="hero-sub">Lista de objetivos organizada. Haz clic en cada ítem para ver los detalles.</p>
              

              <div className="goals-grid goal-card">
                <details>
                  <summary>1) Conseguir primera oportunidad (práctica/entry) en Desarrollo <span className="summary-indicator">▸</span></summary>
                  <div className="goal-body">
                    <strong>S (Específica):</strong> Obtener un puesto de práctica/entry en desarrollo de software.<br />
                    <strong>M (Medible):</strong> 10 aplicaciones dirigidas/mes; 2 entrevistas/mes; registro en una hoja de control.<br />
                    <strong>A (Alcanzable):</strong> CV y carta adaptados a cada vacante; simulacros de entrevista quincenales.<br />
                    <strong>R (Relevante):</strong> Primer paso para ganar experiencia real en desarrollo.<br />
                    <strong>T (Tiempo):</strong> 30/06/2026.
                  </div>
                </details>

                <details>
                  <summary>2) Inglés B1 (CEFR) <span className="summary-indicator">▸</span></summary>
                  <div className="goal-body">
                    <strong>S (Específica):</strong> Subir de A2 a B1 según CEFR.<br />
                    <strong>M (Medible):</strong> Rutina 40 min/día (15’ lectura técnica, 15’ escucha, 10’ escritura) + placement cada 12 semanas.<br />
                    <strong>A (Alcanzable):</strong> Material gratuito y guías de estudio; un README técnico simple en inglés/mes.<br />
                    <strong>R (Relevante):</strong> Requisito frecuente para roles de desarrollo/ciber.<br />
                    <strong>T (Tiempo):</strong> 30/06/2026.
                  </div>
                </details>

                <details>
                  <summary>3) Proyecto Backend 1 (Java o C#) con buenas Prácticas <span className="summary-indicator">▸</span></summary>
                  <div className="goal-body">
                    <strong>S (Específica):</strong> API REST CRUD con validación de entradas y manejo de errores.<br />
                    <strong>M (Medible):</strong> ≥10 tests unitarios; README con instalación/uso; checklist de código seguro adjunta.<br />
                    <strong>A (Alcanzable):</strong> Alcance acotado (3–4 endpoints); guía de commit por hitos.<br />
                    <strong>R (Relevante):</strong> Evidencia directa de habilidades de desarrollo seguras.<br />
                    <strong>T (Tiempo):</strong> 31/05/2026.
                  </div>
                </details>

                <details>
                  <summary>4) Proyecto de Base de Datos con “mínimo privilegio” <span className="summary-indicator">▸</span></summary>
                  <div className="goal-body">
                    <strong>S (Específica):</strong> Modelo lógico + consultas (JOIN/AGGREGATE/VISTAS) aplicadas a un caso simple.<br />
                    <strong>M (Medible):</strong> Scripts reproducibles; cuentas con principio de mínimo privilegio verificadas; README con evidencia.<br />
                    <strong>A (Alcanzable):</strong> Uso de SQL Server (entorno ya conocido).<br />
                    <strong>R (Relevante):</strong> Base clave para backend seguro.<br />
                    <strong>T (Tiempo):</strong> 31/05/2026.
                  </div>
                </details>

                <details>
                  <summary>5) Dos cursos focalizados (Secure Coding + Unit Testing) <span className="summary-indicator">▸</span></summary>
                  <div className="goal-body">
                    <strong>S (Específica):</strong> Completar 2 cursos: código seguro y pruebas unitarias.<br />
                    <strong>M (Medible):</strong> Certificados obtenidos; aplicar lo aprendido en los proyectos (commits con fixes/tests).<br />
                    <strong>A (Alcanzable):</strong> Cronograma semanal (2–3 h/semana).<br />
                    <strong>R (Relevante):</strong> Mejora calidad y seguridad del software.<br />
                    <strong>T (Tiempo):</strong> 31/05/2026.
                  </div>
                </details>

                <details>
                  <summary>6) Certificación SC-900 (Fundamentos de Seguridad) <span className="summary-indicator">▸</span></summary>
                  <div className="goal-body">
                    <strong>S (Específica):</strong> Preparar y aprobar el examen SC-900.<br />
                    <strong>M (Medible):</strong> Dos simulacros ≥70%; glosario propio; examen agendado con 2 semanas de antelación.<br />
                    <strong>A (Alcanzable):</strong> Plan de estudio semanal y recursos oficiales.<br />
                    <strong>R (Relevante):</strong> Señal temprana de base en seguridad para empleadores.<br />
                    <strong>T (Tiempo):</strong> 30/11/2026.
                  </div>
                </details>

                <details>
                  <summary>7) Experiencia práctica acumulada (6–9 meses) en Desarrollo <span className="summary-indicator">▸</span></summary>
                  <div className="goal-body">
                    <strong>S (Específica):</strong> Completar 6–9 meses en práctica/empleo de desarrollo.<br />
                    <strong>M (Medible):</strong> Dos logros medibles (p. ej., menor tasa de errores, mejor cobertura de pruebas, menor tiempo de respuesta).<br />
                    <strong>A (Alcanzable):</strong> Buscar continuidad tras la práctica; documentar aportes en PRs/tickets.<br />
                    <strong>R (Relevante):</strong> Construye trayectoria y referencias técnicas.<br />
                    <strong>T (Tiempo):</strong> 31/12/2026.
                  </div>
                </details>

                <details>
                  <summary>8) Caso de estudio: Seguridad aplicada al Software <span className="summary-indicator">▸</span></summary>
                  <div className="goal-body">
                    <strong>S (Específica):</strong> Publicar un caso de estudio (PDF/README) explicando validación de entradas, gestión de credenciales, manejo de errores y logging en un proyecto.<br />
                    <strong>M (Medible):</strong> Documento público con ejemplos de código y checklist verificada.<br />
                    <strong>A (Alcanzable):</strong> Basado en el Proyecto Backend 1 o uno nuevo pequeño.<br />
                    <strong>R (Relevante):</strong> Demuestra criterio de seguridad desde el diseño.<br />
                    <strong>T (Tiempo):</strong> 30/11/2026.
                  </div>
                </details>
              </div>
              </header>
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

export default Smart;

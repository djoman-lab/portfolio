// homePage.js
export const homePage = /*html*/ `
  <header class="header">
    <nav class="nav container">
      <div class="nav-brand">Roméo DJOMAN</div>

      <!-- Bouton bascule menu mobile -->
      <button class="nav-toggle" aria-label="Ouvrir le menu">
        <span></span><span></span><span></span>
      </button>

      <ul class="nav-menu">
        <li><a href="#about">À propos</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#services">Services</a></li>
        <!-- Bouton de thème visible en desktop -->
        <li>
          <button class="theme-toggle" aria-label="Changer le thème" title="Changer le thème">
            <span class="icon-moon" aria-hidden="true"></span>
            <span class="theme-label">Thème</span>
          </button>
        </li>
        <li><a href="#contact" class="nav-cta">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <!-- HERO -->
    <section class="hero" id="about">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">Développeur Full-Stack <br> Java, Spring, Angular</h1>
            <p class="hero-subtitle">Je transforme des idées en solutions numériques.</p>
            <div class="hero-buttons">
              <a href="#projects" class="btn btn-primary">Voir mes projets</a>
              <a href="#contact" class="btn btn-secondary">Contact</a>
            </div>

            <div class="hero-tech">
              <span class="tech-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/></svg>
                Next.js
              </span>
              <span class="tech-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.908 16.596c0 .749-.64 1.348-1.428 1.348s-1.428-.599-1.428-1.348c0-.749.64-1.348 1.428-1.348s1.428.599 1.428 1.348zm17.143-9.363c0 .748-.64 1.347-1.429 1.347-.788 0-1.428-.599-1.428-1.347 0-.749.64-1.348 1.428-1.348.789 0 1.429.599 1.429 1.348zm-6.122 12.24c0 .749-.64 1.348-1.429 1.348s-1.428-.599-1.428-1.348c0-.748.64-1.347 1.428-1.347s1.429.599 1.429 1.347zM12 1.225c.749 0 1.429.599 1.429 1.347 0 .749-.68 1.348-1.429 1.348s-1.428-.599-1.428-1.348c0-.748.679-1.347 1.428-1.347zm-4.5 7.652a1.287 1.287 0 0 0-1.429 1.347c0 .749.64 1.348 1.429 1.348s1.428-.599 1.428-1.348c0-.748-.64-1.347-1.428-1.347zm9 0a1.287 1.287 0 0 0-1.429 1.347c0 .749.64 1.348 1.429 1.348s1.428-.599 1.428-1.348c0-.748-.64-1.347-1.428-1.347z"/></svg>
                Framer Motion
              </span>
            </div>
          </div>

          <div class="hero-images">
            <img src="assets/portrait.jpg" alt="Roméo DJOMAN" class="hero-portrait">
            <img src="assets/mockup.png" alt="Dashboard mockup" class="hero-mockup">
          </div>
        </div>
      </div>
    </section>

    <!-- PROJETS -->
    <section class="projects" id="projects">
      <div class="container items-center">
        <h2 class="section-title">Mes Projets Récents</h2>

        <div class="projects-intro">
          <p>Fort de ma double formation scientifique et technique, je conçois des solutions robustes et innovantes qui répondent aux besoins du marché numérique moderne.</p>
        </div>

        <div class="carousel">
          <button class="carousel-btn carousel-btn-prev" aria-label="Previous">‹</button>
          <div class="carousel-track-container">
            <div class="carousel-track">
              <article class="project-card">
                <a href="https://flinsc-legal.com" target="_blank" rel="noopener noreferrer">
                  <div class="project-image">
                    <img src="assets/flinsc_capture.png" alt="Flinsc Légal">
                  </div>
                  <h4>Flinsc Légal</h4>
                  <p>Application mobile full stack de gestion de documents juridiques, développée avec Spring Boot, Angular/Ionic et PostgreSQL.</p>
                </a>
              </article>

              <article class="project-card">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <div class="project-image"><img src="assets/blanck.png" alt="Portail E-commerce Mobile"></div>
                  <h4>Portail E-commerce Mobile</h4>
                  <p>Application mobile complète pour la vente en ligne avec paiement sécurisé.</p>
                </a>
              </article>

              <article class="project-card">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <div class="project-image"><img src="assets/blanck.png" alt="API de Sécurité Bancaire"></div>
                  <h4>API de Sécurité Bancaire</h4>
                  <p>API REST sécurisée pour transactions bancaires.</p>
                </a>
              </article>

              <article class="project-card">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <div class="project-image"><img src="assets/blanck.png" alt="Prototype IoT avec Arduino"></div>
                  <h4>Prototype IoT avec Arduino</h4>
                  <p>Système IoT connecté pour la domotique avec capteurs et Arduino.</p>
                </a>
              </article>
            </div>
          </div>
          <button class="carousel-btn carousel-btn-next" aria-label="Next">›</button>
        </div>
      </div>
    </section>

    <!-- COMPÉTENCES (structure conservée) -->
    <section class="skills" id="services">
      <div class="container">
        <h2 class="section-title">Compétences</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <div class="skill-icon"><svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/></svg></div>
            <h3>Backend</h3>
          </div>
          <div class="skill-category">
            <div class="skill-icon"><svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"/></svg></div>
            <h3>Frontend</h3>
          </div>
          <div class="skill-category">
            <div class="skill-icon"><svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg></div>
            <h3>Sécurité</h3>
          </div>
          <div class="skill-category">
            <div class="skill-icon"><svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>
            <h3>Outils</h3>
          </div>
          <div class="skill-category">
            <div class="skill-icon"><svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-4H8v4H6V7h2v4h4V7h2v10zm5-9.5V9h-3V7h3v1.5z"/></svg></div>
            <h3>Applications Web & Mobile</h3>
          </div>
          <div class="skill-category">
            <div class="skill-icon"><svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg></div>
            <h3>Docker Ionic</h3>
          </div>
          <div class="skill-category">
            <div class="skill-icon"><svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg></div>
            <h3>Sites Vitrines & Portfolios</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- BRANDING & SERVICES (NOUVELLE SECTION) -->
    <section class="branding-services" id="branding-services">
      <div class="container">
        <div class="branding-head">
          <h2 class="section-title">Branding & Services</h2>
          <p class="section-subtitle">Conception, développement et maintenance de sites web pour <strong>la France</strong> et la <strong>Côte d’Ivoire</strong>.</p>
        </div>

        <div class="services-grid">
          <article class="service-card">
            <div class="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4zm0 4l-5 3v3c0 3.62 2.71 6.93 5 7.94 2.29-1.01 5-4.32 5-7.94V9l-5-3z"/></svg>
            </div>
            <h3>Conception & Identité</h3>
            <p>Charte graphique, maquettes haute fidélité, UX/UI moderne et accessible pour des interfaces élégantes.</p>
          </article>

          <article class="service-card">
            <div class="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v10H5.17L4 17.17V6m0-2a2 2 0 0 0-2 2v16l4-4h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4z"/></svg>
            </div>
            <h3>Développement</h3>
            <p>Sites vitrines, portails e-commerce, API sécurisées. Stack Java/Spring, Angular/Ionic, intégrations modernes.</p>
          </article>

          <article class="service-card">
            <div class="service-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8a4 4 0 1 1 0 8H6v2H4v-2H2v-2h2v-2h2v2h6a2 2 0 1 0 0-4H8a4 4 0 1 1 4-4z"/></svg>
            </div>
            <h3>Maintenance & SEO</h3>
            <p>Mises à jour, supervision, sécurité, optimisation des performances et référencement naturel.</p>
          </article>
        </div>

        <div class="services-cta">
          <a class="btn btn-gradient" href="#contact">Demander un devis</a>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="contact-section" id="contact">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Contact</h2>
            <div class="social-links">
              <a href="#" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a href="#" aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.54-2.12-9.91-5.04-.42.72-.66 1.55-.66 2.44 0 1.67.85 3.14 2.14 4-.79-.03-1.53-.24-2.18-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.94 2.42 3.35 4.55 3.39-1.67 1.31-3.77 2.09-6.05 2.09-.39 0-.78-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.06 0 14-7.5 14-14 0-.21 0-.42-.02-.63.96-.69 1.8-1.56 2.46-2.55z"/></svg>
              </a>
              <a href="#" aria-label="Portfolio">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
              </a>
            </div>

            <div class="email-info">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              romeo.djoman@outlook.fr
            </div>
          </div>

          <form class="contact-form">
            <div class="form-grid">
              <div class="form-group">
                <input type="text" placeholder="Nom" required>
              </div>
              <div class="form-group">
                <input type="email" placeholder="Email" required>
              </div>
              <div class="form-group">
                <input type="tel" placeholder="Téléphone" required>
              </div>
            </div>
            <div class="form-group">
              <textarea placeholder="Message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <p>© 2024 Roméo DJOMAN — Développeur Full-Stack</p>
    </div>
  </footer>
`;

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="shell">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="hero-introduction">
              Full-stack developer based in Thailand
            </p>
            <h1>Software built around real problems.</h1>
            <p className="hero-description">
              I’m Jiranat Pattanasintara. I build web applications across the
              stack, connecting thoughtful interfaces, backend APIs, and
              data-driven systems.
            </p>
            <div className="button-group">
              <a href="#projects" className="button button-primary">
                Explore my projects
              </a>
              <a
                href="/Jiranat_Pattanasintara_Full_Stack_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                View resume
              </a>
            </div>
            <p className="hero-availability">
              <span aria-hidden="true" />
              Open to full-time developer opportunities
            </p>
          </div>
          <aside
            className="system-preview"
            aria-label="VextaCore project capabilities"
          >
            <div className="system-preview-heading">
              <div>
                <p className="project-context">Inside a project</p>
                <h2>VextaCore</h2>
              </div>
              <span className="status-tag">In production</span>
            </div>
            <p className="system-preview-description">
              Turning football statistics and market data into research
              workflows.
            </p>
            <div className="capability-map">
              <div className="capability-node">
                <span className="node-symbol" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <ellipse cx="12" cy="5" rx="7" ry="3" />
                    <path d="M5 5v7c0 4 14 4 14 0V5M5 12v7c0 4 14 4 14 0v-7" />
                  </svg>
                </span>
                <div>
                  <h3>Connect the data</h3>
                  <p>External statistics and market sources</p>
                </div>
              </div>
              <div className="capability-node">
                <span className="node-symbol" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="m8 4-6 8 6 8m8-16 6 8-6 8M14 3l-4 18" />
                  </svg>
                </span>
                <div>
                  <h3>Engineer the system</h3>
                  <p>Validation, models, scheduled processing</p>
                </div>
              </div>
              <div className="capability-node">
                <span className="node-symbol" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 9h18m-12 0v11m4-4 2-3 2 1 2-3" />
                  </svg>
                </span>
                <div>
                  <h3>Make it useful</h3>
                  <p>Research, simulation, market signals</p>
                </div>
              </div>
            </div>
            <a className="text-link" href="#vextacore">
              Explore the engineering <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </div>
        <div className="hero-summary">
          <p>From interface to deployment</p>
          <ul aria-label="Core technologies">
            <li>React & Next.js</li>
            <li>Node.js & APIs</li>
            <li>Go & PostgreSQL</li>
            <li>WordPress & PHP</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

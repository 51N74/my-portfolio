import ProjectCard from "./ProjectCard";

const selectedProjects = [
  {
    id: "panstr",
    name: "Panstr",
    category: "Decentralized discussion platform",
    image: "/projects/panstr.png",
    imageAlt: "Panstr forum interface with discussion categories and posts",
    description:
      "A forum-style social platform inspired by traditional discussion boards, built on the Nostr protocol.",
    evidenceTitle: "A different data layer",
    evidence:
      "The application connects directly to external Nostr relays instead of using its own database or a conventional centralized backend.",
    tech: ["Next.js", "Nostr Protocol", "Tailwind CSS", "Vercel"],
    link: "https://panstr.vercel.app/",
    github: "https://github.com/51N74/panstr-webboard-forum",
  },
  {
    id: "rice-panja",
    name: "The Rice PanJa POS",
    category: "Restaurant operations",
    image: "/projects/the-rice-panja.png",
    imageAlt: "The Rice PanJa restaurant point-of-sale application",
    description:
      "A web-based point-of-sale system for a resort restaurant, addressing a slow existing system and poor synchronization between ordering and the kitchen.",
    evidenceTitle: "Built for an operational problem",
    evidence:
      "Completed and deployed. The restaurant closed before the application could be adopted in production.",
    tech: ["Next.js", "React", "Node.js", "Full-Stack Architecture"],
    link: "https://the-rice-panja-pos.vercel.app/",
    github: "https://github.com/51N74/POS-The-Rice-Panja",
  },
  {
    id: "homekitchen",
    name: "HomeKitchen",
    category: "Frontend product prototype",
    description:
      "A frontend prototype exploring food-ordering workflows for small home kitchens.",
    evidenceTitle: "Capacity shapes the product",
    evidence:
      "Unlike delivery workflows that assume a kitchen can keep accepting orders, the concept treats limited kitchen capacity as a first-class constraint.",
    tech: ["React", "Frontend Prototype", "Product Concept"],
    github: "https://github.com/51N74/homekitchen-app",
  },
];

const otherProjects = [
  {
    name: "Sintara Coffee Gallery",
    description: "A web application showcasing a gallery of coffee beans.",
    tech: ["React", "CSS3", "JavaScript"],
    link: "https://sintaracoffee.vercel.app/",
  },
  {
    name: "FilmGallery",
    description: "A web platform for showcasing film photography.",
    tech: ["Next.js", "Gallery Component"],
    link: "https://esyen-film-gallery.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section projects-section"
      aria-labelledby="projects-title"
    >
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="section-context">Selected work</p>
            <h2 id="projects-title">The work behind the skills.</h2>
          </div>
          <p>
            Production systems, architectural decisions, and product ideas.
            Here’s what I’ve built and how I approached it.
          </p>
        </div>
        <article
          id="vextacore"
          className="featured-project"
          aria-labelledby="vextacore-title"
        >
          <div className="featured-overview">
            <div className="featured-heading">
              <span className="project-context">Featured project</span>
              <span className="status-tag status-tag-light">
                Live production application
              </span>
            </div>
            <h3 id="vextacore-title">VextaCore</h3>
            <p className="featured-subtitle">Quantitative football analytics</p>
            <p>
              A research platform combining statistical modelling and market
              data to explore where model estimates and market prices diverge.
            </p>
            <p>
              I independently designed the system, integrated multiple data
              sources, built the application, and deployed it as a working
              product.
            </p>
            <a
              href="https://vextacore.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-white"
              aria-label="Visit VextaCore"
            >
              Visit VextaCore <span aria-hidden="true">↗</span>
            </a>
            <div className="featured-role">
              <h4>My role</h4>
              <p>
                Application architecture, frontend development, backend and API
                integration, external data integration, automated processing,
                and quantitative modelling integration.
              </p>
            </div>
          </div>
          <div className="featured-engineering">
            <h4>What I engineered</h4>
            <dl className="engineering-list">
              <div>
                <dt>Application architecture</dt>
                <dd>
                  An API-driven frontend and backend supporting research,
                  simulation, and market-signal workflows.
                </dd>
              </div>
              <div>
                <dt>Data integration & integrity</dt>
                <dd>
                  Pipelines combining external statistics with market data, with
                  validation to reduce stale or inconsistent inputs.
                </dd>
              </div>
              <div>
                <dt>Models into usable interfaces</dt>
                <dd>
                  Statistical models and simulation features integrated into a
                  responsive research interface.
                </dd>
              </div>
              <div>
                <dt>Production delivery</dt>
                <dd>
                  Scheduled processing, testing, and deployment of the working
                  application.
                </dd>
              </div>
            </dl>
            <p className="project-takeaway">
              The engineering challenge: bring multiple data sources into a
              coherent workflow for researching model–market differences.
            </p>
          </div>
        </article>
        <article
          id="unpause"
          className="unpause-project"
          aria-labelledby="unpause-title"
        >
          <div className="unpause-overview">
            <p className="project-context">
              Full-stack application / Course project MVP
            </p>
            <h3 id="unpause-title">Unpause</h3>
            <p className="project-subtitle">
              Pick up a project without losing the context.
            </p>
            <p>
              A workspace for solo developers returning to paused software
              projects. It brings project scope, decision history, and the next
              action into a focused resume view.
            </p>
            <ul className="technology-list" aria-label="Unpause technologies">
              <li>React</li>
              <li>TypeScript</li>
              <li>Go / Gin</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
              <li>Render</li>
            </ul>
            <div className="project-links">
              <a
                href="https://unpause-pey1.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Unpause"
              >
                Visit Unpause <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://github.com/51N74/Unpause"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Unpause source code"
              >
                Source code <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="unpause-evidence">
            <h4>Keeping context consistent</h4>
            <dl className="engineering-list">
              <div>
                <dt>Decisions retain their history</dt>
                <dd>
                  Each decision stays linked to the scope version active when it
                  was created. Scope versions are append-only.
                </dd>
              </div>
              <div>
                <dt>Business rules in the backend</dt>
                <dd>
                  A Go API with PostgreSQL-backed sessions, per-user ownership
                  checks, and transactional scope creation.
                </dd>
              </div>
              <div>
                <dt>Built for delivery</dt>
                <dd>
                  React and TypeScript frontend, Go integration tests, frontend
                  component tests, and a multi-stage Docker deployment.
                </dd>
              </div>
            </dl>
            <a
              className="text-link"
              href="https://github.com/51N74/Unpause#readme"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the architecture notes <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
        <div className="subsection-heading">
          <h3>More problems, different approaches.</h3>
          <p>
            Decentralized data, business workflows, and frontend exploration.
          </p>
        </div>
        <div className="project-grid">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="other-projects">
          <h3>Also built</h3>
          <div className="other-project-grid">
            {otherProjects.map((project) => (
              <article className="other-project" key={project.name}>
                <div>
                  <h4>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name} <span aria-hidden="true">↗</span>
                    </a>
                  </h4>
                  <p>{project.description}</p>
                </div>
                <ul
                  className="technology-list"
                  aria-label={`${project.name} technologies`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

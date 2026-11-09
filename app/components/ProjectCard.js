export default function ProjectCard({ project }) {
  return (
    <article
      id={project.id}
      className="project-card"
      aria-labelledby={`${project.id}-title`}
    >
      {project.image ? (
        <div className="project-image">
          <img
            src={project.image}
            alt={project.imageAlt}
            width={1308}
            height={816}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div
          className="prototype-visual"
          role="img"
          aria-label="HomeKitchen concept linking kitchen capacity with the order workflow"
        >
          <span>HomeKitchen</span>
          <div className="prototype-constraint">
            <span>Kitchen capacity</span>
            <span>Order workflow</span>
          </div>
          <p>Designing around the limits of a home kitchen.</p>
        </div>
      )}
      <div className="project-card-body">
        <p className="project-context">{project.category}</p>
        <h3 id={`${project.id}-title`}>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-decision">
          <h4>{project.evidenceTitle}</h4>
          <p>{project.evidence}</p>
        </div>
        <ul
          className="technology-list"
          aria-label={`${project.name} technologies and focus`}
        >
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name}`}
            >
              Visit project <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} source code`}
            >
              Source code <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

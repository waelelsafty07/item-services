export function Projects({ projects }) {
  return (
    <div className="card-grid projects">
      {projects.map((project) => (
        <article key={project.name} className="card project">
          <h4>{project.name}</h4>
          <p>{project.description}</p>
          <div className="tags">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <a href={project.url} target="_blank" rel="noreferrer" className="project-link">
            View project →
          </a>
        </article>
      ))}
    </div>
  );
}

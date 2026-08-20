import type { Project } from '../data/projects';
import './ProjectEntry.css';

type Props = {
  project: Project;
  index: number;
  full?: boolean;
};

export function ProjectEntry({ project, index, full = false }: Props) {
  return (
    <article className="project-entry">
      <span className="project-entry-index">{String(index).padStart(2, '0')}</span>
      <div className="project-entry-body">
        <div className="project-entry-head">
          <h3>{project.name}</h3>
          <span className="eyebrow">{project.status}</span>
        </div>

        <p>{full ? project.detail : project.summary}</p>

        <ul className="project-entry-stack">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="project-entry-link">
          {project.repoUrl ? (
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              código no GitHub ↗
            </a>
          ) : (
            <span>{project.repoNote}</span>
          )}
        </p>
      </div>
    </article>
  );
}

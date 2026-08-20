import { projects } from '../data/projects';
import { ProjectEntry } from '../components/ProjectEntry';
import './Projects.css';

export function Projects() {
  return (
    <section className="shell projects-page">
      <span className="eyebrow">projetos</span>
      <h1>O que eu já construí</h1>
      <p className="projects-intro">
        Três projetos que representam fases diferentes: um que mantenho sozinho e levo a sério
        em segurança, um feito em equipe num programa de startup, e um que comecei num curso e
        segui por conta própria. Fora esses, tem uma pilha de exercícios de curso (formulários,
        landing pages, conversores) que ficaram no GitHub — não entram aqui porque são prática,
        não produto, mas estão públicos pra quem quiser conferir.
      </p>

      <div className="project-list">
        {projects.map((project, i) => (
          <ProjectEntry key={project.slug} project={project} index={i + 1} full />
        ))}
      </div>

      <p className="see-all">
        <a href="https://github.com/LeonardoBruchez?tab=repositories" target="_blank" rel="noreferrer">
          resto dos repositórios no GitHub →
        </a>
      </p>
    </section>
  );
}

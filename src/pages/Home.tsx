import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ProjectEntry } from '../components/ProjectEntry';
import './Home.css';

export function Home() {
  return (
    <>
      <section className="hero shell">
        <span className="eyebrow">ADS · 2º semestre · Estácio SC</span>
        <h1>Leonardo Bruchez</h1>
        <div className="hero-body">
          <div className="hero-text">
            <p>
              Estudante de Análise e Desenvolvimento de Sistemas, no começo da faculdade mas já
              além da grade em HTML, CSS, JavaScript e React — os projetos abaixo eu construí por
              conta própria, fora de aula. Agora estou me aprofundando em segurança da informação
              e, mais adiante, quero migrar pra dados e nuvem.
            </p>
            <p>
              Antes disso me formei técnico em manutenção de aeronaves (aviônicos) pelo SENAI
              Palhoça e competi na Aerospace Maintenance Competition 2024, pela equipe da Azul
              Linhas Aéreas. Trocar de área não foi por falta de rumo — foi escolha, e a atenção a
              detalhe que aprendi ali eu levo pro código.
            </p>
          </div>
          <img src="/Leonardo-Bruchez.jpg" alt="Foto de Leonardo Bruchez" className="hero-photo" />
        </div>
      </section>

      <section className="shell home-projects">
        <span className="eyebrow">projetos recentes</span>
        <h2>O que andei construindo</h2>
        <div className="project-list">
          {projects.map((project, i) => (
            <ProjectEntry key={project.slug} project={project} index={i + 1} />
          ))}
        </div>
        <p className="see-all">
          <Link to="/projetos">todos os projetos, com mais detalhe →</Link>
        </p>
      </section>
    </>
  );
}

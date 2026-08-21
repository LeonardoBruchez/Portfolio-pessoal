import { motion, type Variants } from 'motion/react';
import type { Project } from '../data/projects';
import './ProjectEntry.css';

type Props = {
  project: Project;
  index: number;
  full?: boolean;
};

const indexVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const stackVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const tagVariants: Variants = {
  hidden: { opacity: 0, y: 4 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
};

export function ProjectEntry({ project, index, full = false }: Props) {
  return (
    <article className="project-entry">
      <motion.span
        className="project-entry-index"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-15% 0px' }}
        variants={indexVariants}
      >
        {String(index).padStart(2, '0')}
      </motion.span>
      <div className="project-entry-body">
        <div className="project-entry-head">
          <h3>{project.name}</h3>
          <span className="eyebrow">{project.status}</span>
        </div>

        {full ? (
          project.detail.map((paragraph, i) => <p key={i}>{paragraph}</p>)
        ) : (
          <p>{project.summary}</p>
        )}

        <motion.ul
          className="project-entry-stack"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-15% 0px' }}
          variants={stackVariants}
        >
          {project.stack.map((item) => (
            <motion.li key={item} variants={tagVariants}>
              {item}
            </motion.li>
          ))}
        </motion.ul>

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

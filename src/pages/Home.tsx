import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { projects } from "../data/projects";
import { ProjectEntry } from "../components/ProjectEntry";
import "./Home.css";

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 36]);

  return (
    <>
      <section className="hero shell" ref={heroRef}>
        <span className="eyebrow">ADS · 2º semestre · Estácio SC</span>
        <h1>Leonardo Bruchez</h1>
        <p className="hero-tagline">
          Construindo em React e Node fora de aula, migrando aos poucos pra
          segurança —{" "}
          <Link to="/curriculo">a trajetória completa tá no currículo</Link>.
        </p>

        <div className="hero-panel">
          <motion.img
            src="/Leonardo-Bruchez.jpg"
            alt="Foto de Leonardo Bruchez"
            className="hero-photo"
            style={{ y: photoY }}
          />

          <motion.pre
            className="hero-snippet"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            <code>
              <span className="tok-kw">const</span>{" "}
              <span className="tok-var">dev</span> = {"{"}
              {"\n"} name: <span className="tok-str">'Leonardo Bruchez'</span>,
              {"\n"} base: <span className="tok-str">'São José, SC'</span>,
              {"\n"} stack: [<span className="tok-str">'React'</span>,{" "}
              <span className="tok-str">'Node'</span>,{" "}
              <span className="tok-str">'security'</span>],
              {"\n"} system: [<span className="tok-str">'Windows'</span>,{" "}
              <span className="tok-str">'Linux'</span>,{"\n"} dailyTools: [
              <span className="tok-str">'VS Code'</span>,{" "}
              <span className="tok-str">'Insomnia'</span>,{" "}
              <span className="tok-str">'Responsively.app'</span>
              ],{"\n"} openTo: <span className="tok-str">'estágio'</span>,{"\n"}
              {"}"}
              <span className="cursor-blink">_</span>
            </code>
          </motion.pre>
        </div>
      </section>

      <motion.section
        className="shell home-projects"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
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
      </motion.section>
    </>
  );
}

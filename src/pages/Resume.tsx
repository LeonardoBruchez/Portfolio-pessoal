import './Resume.css';

const courses = [
  { name: 'Cybersecurity (120h)', provider: 'FIAP Nano Courses', status: 'em andamento' },
  { name: 'Trilha Fullstack', provider: 'Rocketseat', status: 'em andamento' },
  { name: 'Introdução ao Node.js', provider: 'Rocketseat', status: 'em andamento' },
  { name: 'Introdução à Cibersegurança', provider: 'Cisco', status: 'concluído' },
  { name: 'JavaScript e ECMAScript', provider: 'Curso em Vídeo', status: 'concluído' },
  { name: 'Imersões de IA', provider: 'Rocketseat e Alura', status: 'concluído' },
  { name: 'Fundamentos de HTML e CSS', provider: 'Rocketseat', status: 'concluído' },
  { name: 'Discover', provider: 'Rocketseat', status: 'concluído' },
];

export function Resume() {
  return (
    <section className="shell resume-page">
      <span className="eyebrow">currículo</span>
      <h1>Leonardo Cassiano B. Pereira</h1>

      <p className="resume-intro">
        Ainda no início da faculdade, mas já escrevendo HTML, CSS, JavaScript e React fora de
        aula há tempo suficiente pra ter projetos de verdade rodando — não só exercício. Busco
        estágio pra aprender com gente mais experiente e trocar o "aprendi sozinho" por "aprendi
        em produção".
      </p>

      <div className="resume-grid">
        <div>
          <h2>Formação</h2>
          <dl className="resume-list">
            <div>
              <dt>Análise e Desenvolvimento de Sistemas</dt>
              <dd>Centro Universitário Estácio de Santa Catarina — 2º semestre, em andamento</dd>
            </div>
            <div>
              <dt>Técnico em Manutenção de Aeronaves (Aviônicos)</dt>
              <dd>
                SENAI Palhoça — concluído. Competi na Aerospace Maintenance Competition 2024,
                pela equipe da Azul Linhas Aéreas.
              </dd>
            </div>
          </dl>

          <h2>Como trabalho</h2>
          <p>
            No dia a dia uso HTML5, CSS3, JavaScript e React — essa parte já tá além do que a
            grade cobriu até agora. Node.js e Express dão conta do backend dos meus projetos.
            Também mexi com Python num projeto de visão computacional (MediaPipe, OpenCV,
            scikit-learn). Estou construindo base em segurança da informação e, mais pra frente,
            quero migrar pra dados e nuvem — hoje isso ainda é teoria mais do que prática.
          </p>
        </div>

        <div>
          <h2>Cursos e certificados</h2>
          <ul className="course-list">
            {courses.map((course) => (
              <li key={course.name}>
                <div>
                  <span className="course-name">{course.name}</span>
                  <span className="course-provider">{course.provider}</span>
                </div>
                <span className="eyebrow course-status">{course.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="resume-download">
        <a href="https://leonardobruchez.github.io/curriculo-LeonardoBruchez/" target="_blank" rel="noreferrer">
          baixar currículo em PDF →
        </a>
      </p>
    </section>
  );
}

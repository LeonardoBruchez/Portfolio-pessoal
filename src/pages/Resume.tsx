import './Resume.css';

const courses = [
  { name: 'Cybersecurity (120h)', provider: 'FIAP Nano Courses', status: 'em andamento' },
  { name: 'Introduction to Cybersecurity', provider: 'Cisco', status: 'concluído' },
  { name: 'Trilha Fullstack', provider: 'Rocketseat', status: 'concluído' },
  { name: 'Introdução ao Node.js', provider: 'Rocketseat', status: 'concluído' },
  { name: 'JavaScript', provider: 'Rocketseat', status: 'concluído' },
  { name: 'JavaScript e ECMAScript', provider: 'Curso em Vídeo', status: 'concluído' },
  { name: 'Fundamentos de HTML e CSS', provider: 'Rocketseat', status: 'concluído' },
  { name: 'Git e GitHub', provider: 'Rocketseat', status: 'concluído' },
  { name: 'Lógica de Programação com JavaScript', provider: 'Alura', status: 'concluído' },
];

export function Resume() {
  return (
    <section className="shell resume-page">
      <span className="eyebrow">currículo</span>
      <div className="resume-heading-row">
        <h1>Leonardo Cassiano B. Pereira</h1>
        <a
          className="resume-download-btn"
          href="/Curriculo-Leonardo-Bruchez.pdf"
          target="_blank"
          rel="noreferrer"
        >
          baixar currículo em PDF ↓
        </a>
      </div>

      <p className="resume-intro">
        Estudo programação desde janeiro de 2025 — o primeiro contato foi numa imersão de
        back-end no fim de 2024. Ainda no início da faculdade, mas já escrevendo HTML, CSS,
        JavaScript e React fora de aula há tempo suficiente pra ter projetos de verdade rodando —
        não só exercício. Busco estágio em desenvolvimento web full stack ou segurança da
        informação, pra aprender com gente mais experiente e trocar o "aprendi sozinho" por
        "aprendi em produção".
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
                SENAI Palhoça, com prática no Aeroclube Costa Esmeralda — concluído. Competi na
                Aerospace Maintenance Competition 2024, com apoio à equipe da Azul Linhas Aéreas.
                Vivência em diagnóstico de falhas, leitura de documentação técnica em inglês e
                rotinas de qualidade — reforçou atenção aos detalhes e trabalho em equipe.
              </dd>
            </div>
          </dl>

          <h2>Experiência em TI</h2>
          <dl className="resume-list">
            <div>
              <dt>Projeto Inclusão Digital — Monitoria</dt>
              <dd>
                Abril a julho de 2026. Orientação e acompanhamento de participantes em atividades
                de inclusão digital, com comunicação clara e suporte ao uso de tecnologia.
              </dd>
            </div>
          </dl>

          <h2>Como trabalho</h2>
          <p>
            No dia a dia uso HTML5, CSS3, JavaScript e React — essa parte já tá além do que a
            grade cobriu até agora. Node.js dá conta do backend dos meus projetos. Estou
            aprendendo Python (incluindo Jupyter Notebook integrado com IA) e SQL, e construindo
            base em segurança da informação — Web Application Security, OWASP, vulnerabilidades e
            prática no TryHackMe. É justamente aí que quero focar mais daqui pra frente.
          </p>
          <p>
            IA generativa entrou de vez na minha rotina, não só como curiosidade: o Claude Code é
            ferramenta de trabalho pra escrever e revisar código no dia a dia, e ChatGPT/Gemini
            resolvem pesquisa rápida e automação de tarefa chata. Sei separar o que é atalho de
            produtividade do que precisa de mim entendendo de verdade o que o código faz.
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
                <span
                  className={`eyebrow course-status${course.status === 'em andamento' ? ' course-status-active' : ''}`}
                >
                  {course.status}
                </span>
              </li>
            ))}
          </ul>

          <h2>Informações adicionais</h2>
          <ul className="course-list resume-extra-list">
            <li>Inglês intermediário, suficiente pra ler documentação técnica.</li>
            <li>Interesse em arquitetura de sistemas, redes e cloud computing (AWS/Azure).</li>
            <li>Entusiasta de hardware e otimização de sistemas.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

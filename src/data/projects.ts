export type Project = {
  slug: string;
  name: string;
  status: string;
  summary: string;
  detail: string[];
  stack: string[];
  repoUrl: string | null;
  repoNote?: string;
};

export const projects: Project[] = [
  {
    slug: 'sondaweb',
    name: 'SondaWeb',
    status: 'em desenvolvimento',
    summary:
      'Aponta, por área de atuação e cidade, quais empresas locais valem uma abordagem comercial — e já sugere uma mensagem de abordagem pronta pra cada uma.',
    detail: [
      'Dado o serviço que você oferece (ex: fotografia, social media) e uma cidade, a ferramenta busca negócios locais em geral e cruza sinais públicos de cada um pra classificar quem representa uma boa oportunidade para aquele serviço — sugerindo até uma mensagem de abordagem pronta. Os detalhes de como essa classificação funciona eu prefiro manter reservados por enquanto.',
      'A parte que mais me ocupou foi a superfície de ataque: o app faz requisições para sites de terceiros a partir de dados vindos de fontes externas não confiáveis, o que exigiu guarda contra SSRF, allowlist de CORS fail-closed, rate limiting em três camadas mais um teto global, e retorno de erro que nunca inclui stack trace nem chave de API — decisões documentadas, com os limites assumidos conscientemente, num SECURITY.md à parte.',
      'Em evolução: contas de usuário, banco de dados e hospedagem em nuvem.',
    ],
    stack: ['Node.js', 'React', 'PostgreSQL'],
    repoUrl: null,
    repoNote: 'repositório privado por enquanto',
  },
  {
    slug: 'global-innovators',
    name: 'Global Innovators',
    status: 'startup experience',
    summary:
      'Recebe um PDF e devolve resumo ou questões de múltipla escolha com dificuldade configurável, usando Gemini — com fallback pra modo mock quando a cota da API acaba.',
    detail: [
      'Feito em equipe durante o programa Startup Experience. O fluxo é simples — upload de PDF via Multer, extração de texto com pdf-parse-fork, e a geração do material fica a cargo do Gemini, com parâmetros pra tipo de resumo, nível de dificuldade e quantidade de questões. O ponto que vale mencionar: quando a cota da API estoura (o que acontece com frequência no plano gratuito), a API cai pra um modo mock em vez de quebrar o fluxo de teste — decisão que tomamos justamente por causa desse limite.',
    ],
    stack: ['React', 'Vite', 'Express', 'Multer', 'pdf-parse-fork', 'Gemini API'],
    repoUrl: 'https://github.com/LeonardoBruchez/StartupProject',
  },
  {
    slug: 'handflow-ai',
    name: 'HandFlow AI',
    status: 'projeto individual',
    summary:
      'Reconhecimento de gestos manuais em tempo real pela webcam: MediaPipe extrai os pontos da mão, um classificador treinado por mim decide o gesto, tudo transmitido por WebSocket com latência baixa.',
    detail: [
      'Começou numa imersão de visão computacional da Rocketseat; da metade pra frente segui sozinho, com apoio de IA nas partes que eu ainda não dominava — sobretudo o pipeline de treino do classificador. O navegador captura frames da webcam e manda por WebSocket; no backend em Python, o MediaPipe extrai os 21 pontos de referência de cada mão e um classificador scikit-learn (treinado por mim com amostras próprias, por gesto e por mão) decide o rótulo. FastHTML cuida do servidor e da renderização; o OpenCV entra no pré-processamento de imagem. Dá pra ligar/desligar o desenho dos landmarks e ajustar a qualidade JPEG enviada, o que ajuda a testar o equilíbrio entre latência e precisão.',
    ],
    stack: ['Python', 'FastHTML', 'WebSocket', 'MediaPipe', 'scikit-learn', 'OpenCV'],
    repoUrl: 'https://github.com/LeonardoBruchez/computer_vision_app',
  },
];

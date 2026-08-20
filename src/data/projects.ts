export type Project = {
  slug: string;
  name: string;
  status: string;
  summary: string;
  detail: string;
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
      'Cruza a Google Places API com sinais de presença digital de cada estabelecimento para apontar, por área de atuação e cidade, quais empresas locais valem uma abordagem comercial.',
    detail:
      'Dado uma área de atuação (ex: fotografia, social media) e uma cidade, o backend consulta a Places API, verifica se cada resultado tem site, se o site responde, se há redes sociais ativas, e usa isso pra classificar oportunidade — sugerindo até uma mensagem de abordagem pronta. A parte que mais me ocupou foi a superfície de ataque: o app faz requisições pra sites de terceiros escolhidos por um input de usuário, então precisa de guarda contra SSRF, allowlist de CORS fail-closed, rate limiting em três camadas mais um teto global, e o retorno de erro nunca inclui stack trace nem chave de API. Documentei essas decisões (e os limites que assumi conscientemente) num SECURITY.md à parte. Repositório privado por enquanto — o plano é publicar só o frontend quando o backend for pra um servidor dedicado.',
    stack: ['Node.js', 'Express', 'React 19', 'Vite', 'Tailwind CSS v4', 'PostgreSQL', 'Google Places API'],
    repoUrl: null,
    repoNote: 'repositório privado',
  },
  {
    slug: 'global-innovators',
    name: 'Global Innovators',
    status: 'startup experience',
    summary:
      'Recebe um PDF e devolve resumo ou questões de múltipla escolha com dificuldade configurável, usando Gemini — com fallback pra modo mock quando a cota da API acaba.',
    detail:
      'Feito em equipe durante o programa Startup Experience. O fluxo é simples — upload de PDF via Multer, extração de texto com pdf-parse-fork, e a geração do material fica a cargo do Gemini, com parâmetros pra tipo de resumo, nível de dificuldade e quantidade de questões. O ponto que vale mencionar: quando a cota da API estoura (o que acontece com frequência no plano gratuito), a API cai pra um modo mock em vez de quebrar o fluxo de teste — decisão que tomamos justamente por causa desse limite.',
    stack: ['React', 'Vite', 'Express', 'Multer', 'pdf-parse-fork', 'Gemini API'],
    repoUrl: 'https://github.com/LeonardoBruchez/StartupProject',
  },
  {
    slug: 'handflow-ai',
    name: 'HandFlow AI',
    status: 'projeto individual',
    summary:
      'Reconhecimento de gestos manuais em tempo real pela webcam: MediaPipe extrai os pontos da mão, um classificador treinado por mim decide o gesto, tudo transmitido por WebSocket com latência baixa.',
    detail:
      'Começou numa imersão de visão computacional da Rocketseat; da metade pra frente segui sozinho, com apoio de IA nas partes que eu ainda não dominava — sobretudo o pipeline de treino do classificador. O navegador captura frames da webcam e manda por WebSocket; no backend em Python, o MediaPipe extrai os 21 pontos de referência de cada mão e um classificador scikit-learn (treinado por mim com amostras próprias, por gesto e por mão) decide o rótulo. FastHTML cuida do servidor e da renderização; o OpenCV entra no pré-processamento de imagem. Dá pra ligar/desligar o desenho dos landmarks e ajustar a qualidade JPEG enviada, o que ajuda a testar o equilíbrio entre latência e precisão.',
    stack: ['Python', 'FastHTML', 'WebSocket', 'MediaPipe', 'scikit-learn', 'OpenCV'],
    repoUrl: 'https://github.com/LeonardoBruchez/computer_vision_app',
  },
];

# portfólio

Meu site pessoal — currículo, projetos e contato. Vai pro ar em `bruchez.dev`.

## Stack

React 19 + TypeScript + Vite, sem framework de UI. Roteamento com `react-router-dom`
(`HashRouter` — ver "decisões técnicas" abaixo). CSS puro, sem Tailwind/styled-components:
tokens de cor e tipografia num `:root`, folha por página/componente.

## Rodando localmente

```bash
npm install
npm run dev      # servidor de dev em http://localhost:5173
npm run build    # build de produção em dist/
npm run lint
```

## Estrutura

```
src/
  components/   SiteHeader, SiteFooter, ProjectEntry
  data/         projects.ts — os projetos ficam aqui, não espalhados nas páginas
  pages/        Home, Projects, Resume — uma página, um arquivo de CSS
  styles/       tokens.css (cor/tipografia/reset) e layout.css (header/footer/shell)
```

## Decisões técnicas

**`HashRouter`, não `BrowserRouter`.** O site é hospedagem estática (Netlify/GitHub
Pages), sem servidor de aplicação por trás. Com `BrowserRouter`, dar refresh em
`/projetos` cai em 404 a menos que o host tenha rewrite de rota configurado. Dava pra
contornar com o truque do `404.html` que redireciona pro `index.html`, mas isso troca
uma URL feia (`/#/projetos`) por um script a mais rodando antes da página carregar.
Preferi a solução mais simples e não tive motivo real pra evitar o `#` na URL.

**Sem Tailwind.** O site inteiro é três páginas com um sistema de cor/tipo pequeno —
não achei que valesse a pena a dependência a mais pra esse tamanho de projeto.

**Fontes:** Fraunces nos títulos, Public Sans no corpo, IBM Plex Mono em metadado (status
de projeto, stack, datas). Public Sans é a fonte que o USWDS (design system do governo dos
EUA) desenhou priorizando legibilidade — parecia mais sensato pra um site que também vai
ser lido rápido por recrutador do que escolher algo só pela estética.

**Dados de projeto num arquivo só (`src/data/projects.ts`).** Cada projeto é um objeto
tipado com `summary` (uma linha, usada na home) e `detail` (lista de parágrafos, usada na
página de projetos), em vez de duplicar o texto nas duas páginas ou criar um CMS pra três
itens.

## O que aprendi construindo isso

A primeira versão deste portfólio era uma página de links (estilo "linktree") feita
durante um curso, com HTML/CSS puro. Reescrevendo do zero em React, o que mais me custou
não foi a parte de componente, foi CSS: usei `padding` shorthand (`padding: 1rem 0 2rem`)
em duas páginas achando que só afetava topo/base, e isso zerava o padding lateral e
quebrava o layout no mobile. E um `gap` num grid de duas colunas estava se aplicando
também como espaçamento vertical entre parágrafos que eu não esperava que fossem tratados
como linhas do grid. Nos dois casos o bug só apareceu quando testei em telas menores —
ajudou a fixar o hábito de conferir layout em mais de um viewport antes de considerar uma
página pronta.

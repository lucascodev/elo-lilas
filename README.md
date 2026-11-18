# Elo Lilás

Site de informação, orientação e conexão com a rede de apoio para enfrentamento da violência doméstica.

**Site:** [lucascodev.github.io/elo-lilas](https://lucascodev.github.io/elo-lilas/)

Projeto de Ensino Extensionista da UNIASSELVI: **Desenvolvimento de sites ou aplicativos sobre violência doméstica** (149 h, ODS 16: Paz, Justiça e Instituições Eficazes).

## Por que "Elo Lilás"

- **Elo**: o site é o elo entre quem precisa de ajuda e a rede de proteção (CRAS, CREAS, delegacias, Defensoria, ONGs).
- **Lilás**: cor da campanha Agosto Lilás de conscientização pelo fim da violência contra a mulher.
- É um nome discreto: não expõe a palavra "violência" no histórico do navegador ou numa aba aberta, o que protege quem acessa.

## Status

- Etapas 1 a 5 (pesquisa, requisitos e protótipos): versão preliminar, pendente de validação com a instituição parceira.
- Etapa 6 (implementação): todas as 11 páginas prontas com conteúdo local. Próximo passo: painel de conteúdo (Sanity).

## Como rodar

Requisitos: Node.js 20.9 ou superior (recomendado Node 24 LTS).

```powershell
npm install
npm run dev        # http://localhost:3000
npm run test       # testes das regras de negócio
npm run typecheck  # checagem de tipos
npm run build      # gera o site estático na pasta out/
```

## Publicação

O site é publicado no **GitHub Pages** pelo workflow `.github/workflows/deploy.yml`, a cada push na branch `main`.

Configuração única no GitHub: **Settings > Pages > Build and deployment > Source: GitHub Actions**.

O workflow roda typecheck, testes e build. O subcaminho do repositório (por exemplo `/elo-lilas`) é passado ao Next.js pela variável `NEXT_PUBLIC_BASE_PATH`. Em domínio próprio, ele fica vazio sozinho.

Para testar localmente como no GitHub Pages (Git Bash):

```bash
NEXT_PUBLIC_BASE_PATH=/elo-lilas npm run build
```

**Segurança no GitHub Pages:** o GitHub não permite cabeçalhos HTTP próprios. A política de segurança de conteúdo (CSP) vai numa tag `<meta>`, e a política de referência pela metadata do Next.js. Ficam de fora a proteção contra o site ser aberto dentro de outro (`X-Frame-Options`, `frame-ancestors`) e o `X-Content-Type-Options`. Quem publicar no Cloudflare Pages ou na Netlify ganha esses cabeçalhos pelo arquivo `public/_headers`.

## Licença e créditos

- **Código e textos:** licença [MIT](LICENSE).
- **Fotos:** Unsplash, sob a [licença Unsplash](https://unsplash.com/license). Os créditos estão em [docs/06-curadoria-de-imagens.md](docs/06-curadoria-de-imagens.md).
- **Fontes:** Lexend e Atkinson Hyperlegible, sob a SIL Open Font License, servidas pelo próprio site via Fontsource.
- O documento complementar do AVA (`docs/referencias/`) é material da UNIASSELVI e não entra no repositório.

## Como contribuir

Veja o [CONTRIBUTING.md](CONTRIBUTING.md). Ele explica as regras de segurança do projeto e como adaptar o site para outra cidade. A participação segue o [código de conduta](CODE_OF_CONDUCT.md).

Falhas de segurança são relatadas em particular, como explica o [SECURITY.md](SECURITY.md).

## Estrutura do código

Clean Architecture, um módulo por assunto em `src/modules/`:

| Módulo | Responsabilidade |
|---|---|
| `quick-exit` | Botão Sair rápido e atalho Esc duas vezes (RF01, RF02) |
| `help-channels` | Canais 190, 180, WhatsApp do 180 e Disque 100; barra e faixa de emergência (RF03) |
| `support-network` | Rede de apoio local e regra de dados desatualizados (RF06 a RF08, RN04) |
| `violence-education` | Formas de violência da Lei Maria da Penha (RF04) |
| `site-settings` | Nome da instituição parceira, município e data de revisão |
| `site-shell` | Cabeçalho, menu, navegação e rodapé |
| `home` | Seções da página inicial |
| `warning-signs-quiz` | Teste de sinais de alerta e regra de resultado (RF10, RN06) |
| `help-guide` | Caminhos de ajuda e medida protetiva (RF05) |
| `safety-plan` | Checklist do plano de segurança, sem salvar nada (RF11) |
| `rights` | Medidas protetivas, penalidades e linha do tempo da lei (RF09) |
| `helping-others` | Como ajudar alguém e denúncia anônima (RF12) |
| `children-protection` | Página para crianças e adolescentes (RF13) |
| `faq` | Perguntas frequentes (RF14) |
| `about` | Sobre, privacidade e acessibilidade (RF16, RF17) |

### Páginas

| Rota | Página |
|---|---|
| `/` | Início |
| `/entenda/` | Entenda a violência |
| `/entenda/teste/` | Teste de sinais de alerta |
| `/ajuda/` | Como pedir ajuda |
| `/ajuda/plano-de-seguranca/` | Plano de segurança |
| `/rede-de-apoio/` | Rede de apoio com filtro por tipo |
| `/direitos/` | Seus direitos |
| `/como-ajudar/` | Como ajudar alguém |
| `/criancas-e-adolescentes/` | Crianças e adolescentes |
| `/perguntas/` | Perguntas frequentes |
| `/sobre/` | Sobre, privacidade e acessibilidade |

O conteúdo fica hoje em arquivos `infra/data/*.data.ts` de cada módulo. Quando o Sanity entrar, basta trocar o repositório local por um repositório do Sanity em `infra/repositories`, sem mexer nas páginas.

## Documentação

| Documento | Conteúdo |
|---|---|
| [01 Proposta da atividade](docs/01-proposta-da-atividade.md) | Resumo do que o AVA pede, etapas, cronograma de 149 h e entregas obrigatórias |
| [02 Pesquisa e referências](docs/02-pesquisa-e-referencias.md) | Base legal atualizada, canais oficiais, rede de atendimento e soluções similares |
| [03 Instrumentos de coleta](docs/03-instrumentos-de-coleta.md) | Stakeholders, personas, roteiro de entrevista, questionário e grupo focal |
| [04 Especificação de requisitos](docs/04-especificacao-de-requisitos.md) | Requisitos funcionais, não funcionais, regras de negócio, histórias de usuário e priorização |
| [05 Arquitetura de informação](docs/05-arquitetura-de-informacao.md) | Mapa do site, conteúdo por página e fluxos principais |
| [06 Curadoria de imagens](docs/06-curadoria-de-imagens.md) | Diretrizes visuais e banco de imagens do Unsplash por seção |
| [07 Decisões técnicas](docs/07-decisoes-tecnicas.md) | ADR da stack com opções e trade-offs |
| [08 Plano de execução](docs/08-plano-de-execucao.md) | Cronograma, evidências obrigatórias, riscos e pendências |
| [Protótipos](docs/prototipos.md) | Links do protótipo, identidade visual e roteiro de validação |
| [09 Rede local de Rubinéia](docs/09-rede-local-rubineia.md) | Serviços de Rubinéia e região, fontes e checklist de validação |

## Pendências

1. Município definido: Rubinéia (SP). Falta confirmar a instituição parceira (candidata: CRAS Agenor Monteiro) e validar a rede local ([checklist](docs/09-rede-local-rubineia.md#checklist-de-validação)).
2. Fazer a inscrição na atividade no AVA (botão "Incluir").
3. Validar requisitos e protótipo com a instituição (entrevista, grupo focal e atividade 13).
4. Substituir os textos entre [COLCHETES] pelos dados reais.

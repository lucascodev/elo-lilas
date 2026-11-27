# 07. Decisões técnicas

## ADR 001: stack de implementação

**Status:** aceita em 17/11/2026. A integração com o Sanity entra depois da base do site; até lá o conteúdo fica em arquivos locais por módulo.

### Contexto

- O AVA permite WordPress ou qualquer outra tecnologia. O apêndice do documento complementar classifica WordPress como caminho **simples** e "JavaScript com frameworks" como caminho **avançado** para web, então a opção B está prevista pela própria proposta.
- A entrega final inclui os fontes e materiais para a instituição manter o site (RF18, RNF15, RNF16).
- Os requisitos mais críticos são privacidade sem rastreadores (RNF01 a RNF04), desempenho em celular de entrada (RNF11) e saída rápida confiável (RF01).
- A instituição provavelmente não tem equipe técnica.

### Opções

| Critério | A. WordPress + Elementor (sugestão do AVA) | B. Next.js estático + Sanity (CMS headless) | C. Next.js + conteúdo em Markdown no repositório |
|---|---|---|---|
| Edição pela instituição | Fácil e familiar | Fácil (Sanity Studio com formulários) | Inviável sem conhecer Git |
| Privacidade e segurança | Depende de plugins; superfície de ataque maior e atualizações constantes | Site estático, sem banco exposto, controle total de scripts | Igual a B |
| Desempenho | Elementor gera páginas pesadas | Excelente (HTML estático e imagens otimizadas) | Excelente |
| Custo | Hospedagem PHP paga, em geral | Planos gratuitos (Sanity free e hospedagem estática) | Gratuito |
| Manutenção técnica | Atualizar core, tema e plugins com frequência | Baixa; o site não muda sem nova publicação | Baixa |
| Saída rápida e controles de privacidade | Possível, mas plugins podem injetar scripts | Implementação própria e testável | Implementação própria |
| Aproveitamento no portfólio do estudante | Baixo | Alto (stack atual de mercado e Clean Architecture) | Médio |
| Risco de abandono | Site desatualizado fica vulnerável | Site estático continua seguro mesmo sem manutenção | Conteúdo congela |

### Recomendação

**Opção B: Next.js (App Router, TypeScript, export estático) + Sanity como CMS.**

Motivos: atende de forma nativa os requisitos de privacidade e desempenho, que são os mais sensíveis para esse público; o Sanity Studio dá à instituição um painel simples para editar a rede de apoio e as páginas; e um site estático abandonado continua seguro, enquanto um WordPress sem atualização vira alvo.

**Quando escolher A:** se a instituição já tiver um WordPress, uma pessoa que saiba usá-lo, ou exigir explicitamente essa plataforma. Nesse caso, usar tema leve (Astra ou Neve), evitar Elementor nas páginas principais e não instalar plugins de analytics.

### Proposta de arquitetura (opção B)

- **Front:** Next.js com `output: 'export'`, Tailwind CSS, Clean Architecture em camadas:
  - `domain`: entidades (`SupportService`, `Article`, `QuizQuestion`) e regras (validade da verificação, faixas do teste).
  - `application`: casos de uso (`listSupportServices`, `evaluateQuiz`).
  - `infrastructure`: repositórios que leem do Sanity no build.
  - `presentation`: páginas, componentes e hooks, cada um em pasta própria.
- **CMS:** Sanity com schemas `page`, `supportService`, `faq`, `news`, `siteSettings`.
- **Publicação:** hospedagem estática gratuita (Cloudflare Pages ou Netlify), com rebuild por webhook do Sanity ao publicar. Conferir se o plano gratuito escolhido permite uso por organização sem fins lucrativos.
- **Métricas:** Cloudflare Web Analytics, gratuito e sem cookies, sem nada gravado no aparelho e sem identificar a visitante. É o único script de terceiros do site (exceção ao RNF04), aceito em troca de um fornecedor estável e sem custo; o GoatCounter, que dispensaria o script externo, foi descartado por depender de uma única pessoa. O script só entra no build quando o secret `CLOUDFLARE_ANALYTICS_TOKEN` do repositório está definido, e o CSP libera apenas `static.cloudflareinsights.com` e `cloudflareinsights.com`. O painel guarda seis meses de dados, com amostragem depois de sete dias.
- **Repositório:** GitHub, com README de manutenção e guia de edição para a instituição.

### Consequências

- O estudante precisa preparar um treinamento curto e um guia ilustrado do Sanity Studio para a instituição.
- Mudanças de layout continuam dependendo de um desenvolvedor; mudanças de conteúdo, não.
- Será preciso documentar como transferir a propriedade do projeto Sanity e do repositório para a instituição na entrega.

### Detalhes da implementação (17/11/2026)

- Next.js 16.4, React 19.3 com React Compiler, TypeScript 6 e Tailwind CSS 4.
- Exportação estática (`output: "export"`), com barra no final das URLs para funcionar em qualquer hospedagem estática.
- Fontes Lexend e Atkinson Hyperlegible instaladas pelo npm (Fontsource) e servidas pelo próprio site, sem chamadas ao Google (RNF04).
- Imagens convertidas para WebP (entre 18 KB e 72 KB cada).
- Testes das regras de domínio com Vitest.
- Cabeçalhos de segurança em `public/_headers` (CSP, HSTS, Referrer-Policy no-referrer, X-Frame-Options).
- A regra de dados desatualizados (RN04) é calculada no momento do build. Como cada publicação no painel dispara um novo build, o aviso fica correto enquanto o conteúdo for atualizado; se o site ficar meses sem publicação, o aviso só aparece no build seguinte.

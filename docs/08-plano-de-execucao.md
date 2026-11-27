# 08. Plano de execução

## Fases e entregáveis

| Fase | Atividades do AVA | Horas | Entregável no repositório |
|---|---|---|---|
| Planejamento e pesquisa | 1 a 4 | 17 | `docs/01` a `docs/03`, termo de parceria assinado |
| Prototipação de baixa fidelidade | 5 a 7 | 15 | Wireframes no Figma, link em `docs/prototipos.md` |
| Especificação de requisitos | 8 a 10 | 15 | `docs/04` revisado (versão 1.0) |
| Prototipação de alta fidelidade | 11 a 13 | 15 | Protótipo interativo no Figma validado |
| Implementação | 14 a 22 | 45 | Código em `src/`, site publicado em ambiente de homologação |
| Verificação e validação | 23 a 25 | 15 | Relatório de testes com usuários (`docs/validacao.md`) |
| Ajustes finais e entrega | 26 a 28 | 15 | Site em produção, termo de entrega, guia de manutenção |
| Relatório, paper e comprovação | 29 a 31 | 12 | Relatório final, paper e evidências no AVA |
| **Total** | | **149** | |

Lembrete: no máximo 8 h de extensão por dia, então o projeto leva no mínimo 19 dias de trabalho.

## Evidências obrigatórias

- [ ] Inscrição na atividade no AVA.
- [ ] Ficha de registro de frequência assinada pela instituição em cada encontro presencial (16 atividades presenciais).
- [ ] Registro fotográfico de cada encontro (equipe e ambiente, nunca pessoas atendidas).
- [ ] Termos de consentimento das entrevistas e do grupo focal.
- [ ] Relatório detalhado de cada etapa.
- [ ] Paper acadêmico.
- [ ] Autoavaliação no AVA.
- [ ] Link de avaliação da comunidade enviado à instituição.

## Plano de testes (resumo)

| Tipo | Como | Critério |
|---|---|---|
| Saída rápida | Manual em Android e iOS, Chrome e Safari | Substitui a página e não volta pelo histórico |
| Acessibilidade | Lighthouse, axe DevTools, navegação só por teclado, leitor de tela (TalkBack e NVDA) | WCAG 2.1 AA sem erros críticos |
| Desempenho | Lighthouse com throttling 4G, WebPageTest | LCP < 2,5 s, página inicial < 1 MB |
| Privacidade | Aba Network: só o Cloudflare Web Analytics e o GoatCounter fora do domínio, este apenas ao tocar em "Ligar" ou "Ver rota"; verificação de cookies e do armazenamento do navegador | Zero cookies, nada gravado no aparelho e nenhuma outra requisição a terceiros |
| Usabilidade | Teste com 5 profissionais da instituição com tarefas (achar o 180, achar a DEAM, fazer o teste) | 100% das tarefas concluídas, SUS acima de 68 |
| Conteúdo | Revisão da instituição | Aprovação registrada por página |

## Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Não conseguir instituição parceira | Média | Alto | Contatar CRAS, CREAS e ONGs em paralelo; levar o `docs/01` impresso como apresentação |
| Instituição sem tempo para os encontros presenciais | Alta | Alto | Agendar todos os encontros no primeiro contato; encontros curtos e objetivos |
| Conteúdo jurídico desatualizado | Média | Alto | RN02 e RN03; data de revisão visível |
| Ninguém na instituição para manter o site | Média | Médio | Site estático (continua seguro); guia de edição; treinamento gravado |
| Exposição da usuária por monitoramento do agressor | Média | Alto | Saída rápida, nome neutro, aviso de navegação segura, zero rastreadores |
| Revitimização por imagem ou texto | Baixa | Alto | Diretrizes do `docs/06` e revisão da instituição |

## Pendências imediatas

1. Escolher a instituição parceira e o município. Conferir se ela tem CNPJ e carimbo e se indica uma pessoa responsável para acompanhar as atividades (exigência do documento complementar).
2. Fazer a inscrição na atividade no AVA.
3. Agendar a primeira visita (atividade 1) e levar a ficha de frequência.
4. O documento complementar não traz modelo de relatório nem de paper: confirmar com a tutoria se existe template.

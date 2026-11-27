# Como contribuir

Obrigado pelo interesse no Elo Lilás. Este guia explica como sugerir mudanças e como adaptar o site para outra cidade.

## Antes de começar

- Leia o [README](README.md) para rodar o projeto.
- A arquitetura segue Clean Architecture. As decisões estão em [docs/07-decisoes-tecnicas.md](docs/07-decisoes-tecnicas.md).
- Textos explicativos e documentação em português. Código, nomes e comentários em inglês.

## Regras que não mudam

O público do site pode estar em risco. Toda contribuição precisa manter:

- **Sem rastreamento:** nada de cookies, pixels, fontes ou scripts de terceiros, e nada gravado no aparelho de quem acessa. As únicas exceções são o Cloudflare Web Analytics, que conta as visitas, e o GoatCounter, que conta os toques nos botões de ligar e de ver rota. As duas contagens são anônimas, e cada uma só entra no build quando o secret dela está definido (`CLOUDFLARE_ANALYTICS_TOKEN` e `GOATCOUNTER_CODE`). Para contar um botão novo, use `toTrackEventAttributes`; a saída rápida e as respostas do quiz nunca são contadas. Todo o resto é servido pelo próprio site.
- **Saída rápida** funcionando em todas as páginas (botão e Esc duas vezes).
- **Acessibilidade WCAG 2.1 AA:** contraste, navegação por teclado, foco visível e textos alternativos.
- **Linguagem simples e acolhedora**, sem julgamento.
- **Canais oficiais:** o site orienta e encaminha. Não recebe denúncias nem guarda dados de quem acessa.

## Como enviar uma mudança

1. Abra uma issue descrevendo o problema ou a sugestão.
2. Faça um fork e crie um branch a partir de `main`.
3. Rode `npm run typecheck`, `npm run test` e `npm run build` antes de abrir o pull request.
4. No pull request, explique o que mudou e por quê. Para mudança visual, inclua um print no celular e no desktop.

## Adaptar para outra cidade

Os dados locais ficam em dois arquivos:

| Arquivo | O que trocar |
|---|---|
| `src/modules/site-settings/infra/data/site-settings.data.ts` | Município, estado, instituição parceira, delegacia online do estado |
| `src/modules/support-network/infra/data/support-services.data.ts` | Serviços da rede de apoio local |

Para cada serviço, confirme os dados por telefone ou com a instituição parceira e preencha `last_verified_at` com a data da confirmação. O site avisa quando um dado passa de seis meses sem verificação.

Use [docs/09-rede-local-rubineia.md](docs/09-rede-local-rubineia.md) como modelo para registrar as fontes e o checklist da sua cidade.

## Dados incorretos

Encontrou um telefone ou endereço errado? Abra uma issue com o dado correto e a fonte. Em caso de emergência, ligue 190.

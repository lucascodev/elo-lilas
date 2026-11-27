import type { FaqItem } from "../../domain/entities/faq-item.entity";

// Preliminary list; the final questions come from the interviews with the partner institution.
export const FAQ_ITEMS_DATA: FaqItem[] = [
  {
    id: "protective-order-without-report",
    question: "Preciso de boletim de ocorrência para pedir medida protetiva?",
    answer: "Não. Desde 2023 a medida pode ser concedida com base no seu relato, sem boletim de ocorrência, inquérito ou processo.",
    order: 1,
  },
  {
    id: "anonymous-report",
    question: "A denúncia pelo 180 é anônima?",
    answer: "Pode ser. Você não precisa dizer seu nome. Ao final, recebe um número de protocolo para acompanhar o andamento.",
    order: 2,
  },
  {
    id: "hours-180",
    question: "O 180 funciona à noite e nos fins de semana?",
    answer: "Sim. O atendimento é gratuito e funciona 24 horas, todos os dias, por telefone, WhatsApp, e-mail e em Libras.",
    order: 3,
  },
  {
    id: "lawyer",
    question: "Não tenho dinheiro para advogado. E agora?",
    answer: "A Defensoria Pública oferece orientação e acompanhamento jurídico gratuitos, inclusive para pedir medida protetiva, pensão e guarda dos filhos.",
    order: 4,
  },
  {
    id: "men",
    question: "Homens também sofrem violência doméstica?",
    answer: "Sim. A Lei Maria da Penha protege mulheres, mas homens em situação de violência também podem buscar atendimento no CRAS, no CREAS e na delegacia.",
    order: 5,
  },
  {
    id: "city-without-creas",
    question: "Minha cidade não tem CREAS. Quem me atende?",
    answer: "O CRAS é a porta de entrada da assistência social. Nas cidades pequenas, que não têm CREAS, os casos de violência são atendidos pela equipe técnica do órgão gestor, o departamento de assistência social do município.",
    order: 6,
  },
  {
    id: "privacy",
    question: "Este site guarda o que eu pesquiso?",
    answer: "Não. O site não usa cookies de rastreamento, não pede cadastro e não guarda suas respostas. Para não deixar rastro no aparelho, use a aba anônima do navegador.",
    order: 7,
  },
];

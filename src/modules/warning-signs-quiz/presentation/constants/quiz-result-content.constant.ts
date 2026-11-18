import type { QuizResultLevel } from "../../domain/entities/quiz-result-level.type";

export const QUIZ_RESULT_CONTENT: Record<QuizResultLevel, { badge: string; title: string; text: string }> = {
  risk: {
    badge: "Risco",
    title: "Suas respostas indicam risco",
    text: "Algumas situações que você descreveu podem colocar sua vida em perigo. Se estiver em risco agora, ligue 190. Você também pode pedir uma medida protetiva, mesmo sem boletim de ocorrência.",
  },
  alert: {
    badge: "Alerta",
    title: "Suas respostas mostram sinais de alerta",
    text: "O que você descreveu são formas de violência reconhecidas pela lei. Conversar com uma profissional pode ajudar a entender suas opções. A Central 180 orienta de forma sigilosa, 24 horas.",
  },
  attention: {
    badge: "Atenção",
    title: "Fique atenta a esses sinais",
    text: "Controle e medo não fazem parte de uma relação saudável. Se quiser conversar, a Central 180 atende 24 horas, de forma sigilosa.",
  },
  none: {
    badge: "Sem sinais",
    title: "Suas respostas não indicaram sinais de violência",
    text: "Se algo mudar, ou se você conhece alguém que vive isso, os canais de ajuda estão sempre disponíveis.",
  },
};
